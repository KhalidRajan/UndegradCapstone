"""
Module for Siamese Network hosting on Torchserve
"""
from __future__ import print_function, division
import logging
import io
import os
import torch
import torch.nn.functional as F
import time
from PIL import Image
import numpy as np
from torchvision.transforms import Compose, Resize, ToTensor, Normalize
import base64
from ts.torch_handler.base_handler import BaseHandler

logger = logging.getLogger(__name__)


class SiameseHandler(BaseHandler):

    def initialize(self, context):
        """Initialize function loads the model.pt file and initialized the model object.
       First try to load torchscript else load eager mode state_dict based model.

        Args:
            context (context): It is a JSON Object containing information
            pertaining to the model artifacts parameters.

        Raises:
            RuntimeError: Raises the Runtime error when the model.py is missing

        """
        properties = context.system_properties
        self.map_location = "cuda" if torch.cuda.is_available() else "cpu"
        self.device = "cpu"
        #self.device = torch.device(
        #    self.map_location + ":" + str(properties.get("gpu_id"))
        #    if torch.cuda.is_available()
        #    else self.map_location
        #)

        self.manifest = context.manifest

        model_dir = properties.get("model_dir")
        serialized_file = self.manifest["model"]["serializedFile"]
        model_pt_path = os.path.join(model_dir, serialized_file)

        if not os.path.isfile(model_pt_path):
            raise RuntimeError("Missing the model.pt file")

        # model def file
        model_file = self.manifest["model"].get("modelFile", "")

        if model_file:
            logger.debug("Loading eager model")
            self.model = self._load_pickled_model(model_dir, model_file, model_pt_path)
        else:
            logger.debug("Loading torchscript model")
            self.model = self._load_torchscript_model(model_pt_path)

        self.model.to(self.device)
        self.model.eval()

        logger.debug('Model file %s loaded successfully', model_pt_path)
        self.mapping = {}

        self.initialized = True

    def load_images(self, data):
        images = []
        for row in data:
            image = row.get("data") or row.get("body")
            if isinstance(image, str):
                image = base64.b64decode(image)
            image = Image.open(io.BytesIO(image))
            images.append(image)
        return images

    def preprocess(self, data):
        """
         Scales, crops, and normalizes a list (pair) of PIL images
         returns transformed list of images
        """
        trans = Compose([
            Resize((224, 224)),
            ToTensor(),
            Normalize(mean=[0.485, 0.456, 0.406],
                      std=[0.229, 0.224, 0.225])
        ])
        # apply transformation to images
        model_input = []
        for im in data:
            im = trans(im)
            im = im[None, :] # add a signleton dimension to image tensors as model expects 4D input
            model_input.append(im)
        return model_input

    def inference(self, model_input):
        """
        input: list of 2x4D image tensors [output of preprocess]
        output: list of 2x5D vector tensors
        """
        # Do some inference call to engine here and return output
        tim0 = model_input[0]
        tim1 = model_input[1]
        with torch.no_grad():
            vec0,vec1 = self.model.forward(tim0.to(self.device),tim1.to(self.device))
        model_output = [vec0,vec1]
        return model_output

    def postprocess(self, inference_output):
        """
        Return inference result.
        input: list of 2x5D vector tensors [output of inference]
        output: pairwise eucliedean distance as float
        """
        vec0 = inference_output[0].to('cpu')
        vec1 = inference_output[1].to('cpu')
        eu_dist = F.pairwise_distance(vec0,vec1)
        postprocess_output = eu_dist.item()
        #postprocess_output = eu_dist.tolist()
        return [0,postprocess_output]


    def handle(self, data, context):
        """Entry point. It takes the data from the input request and returns
           the predicted outcome for the input.

        Args:
            data (list): The input data that needs to be made a prediction request on.
            context (Context): It is a JSON Object containing information pertaining to
                               the model artefacts parameters.

        Returns:
            list : Returns a list of dictionary with the predicted response.
        """

        # It can be used for pre or post processing if needed as additional request
        # information is available in context
        start_time = time.time()

        self.context = context
        metrics = self.context.metrics

        images = self.load_images(data)
        data_preprocess = self.preprocess(images)

        if not self._is_explain():
            inf_output = self.inference(data_preprocess)
            output = self.postprocess(inf_output)
        else:
            output = self.explain_handle(data_preprocess, data)

        stop_time = time.time()
        metrics.add_time('Siamese Handler Time Elapsed', round((stop_time - start_time) * 1000, 2), None, 'ms')
        logger.info(f">>>>>>>>>>>>>SIAMESE NETWORK OUTPUT:{output}")
        return output
