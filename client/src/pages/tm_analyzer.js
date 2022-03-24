import Typing from "react-typing-animation";
import Input from "../styles-css/input.module.css";
import axios from "axios";
import React, { useState } from "react";

function TMAnalyze(){

    const [disp_output, setDispOutput]=useState(false);
    const [similarity_score, setSimilarityScore]=useState(0.0);
    
    const [img1, setImg1] = useState();
    const [img2, setImg2] = useState();
    
    const [logo_str1, setLogoStr1] = useState();
    const [logo_str2, setLogoStr2] = useState();
    
    const [prev1, setPrev1] = useState(false);
    const [prev2, setPrev2] = useState(false);
    
    const postData=(score)=>{
        setDispOutput(true);
        let score_rounded = score.toFixed(2);
        setSimilarityScore(score);
    }

    const fileSelectHandler = (e) => {
        let img = e.target.files[0];
        setImg1(URL.createObjectURL(img));
        setPrev1(true);

        var reader = new FileReader();

        reader.readAsDataURL(img);
        reader.onloadend = function () {
            setLogoStr1(reader.result.replace(/^data:image\/[a-z]+;base64,/,""));
        }

    }

    const fileSelectHandler2 = (e) => {
        let img = e.target.files[0]
        setImg2(URL.createObjectURL(img));
        setPrev2(true);

        var reader = new FileReader();

        reader.readAsDataURL(img);
        reader.onloadend = function () {
            setLogoStr2(reader.result.replace(/^data:image\/[a-z]+;base64,/,""));
        }
    }


    const submitImages = async (e) => {


        axios.post("/predictions/siamese_r50", logo_str1, {
            headers:{ "Content-Type": "application/json" }
        });

        let resp = await axios.post("/predictions/siamese_r50", logo_str2, {
            headers:{ "Content-Type": "application/json" }
        });

        setPrev1(false);
        setPrev2(false);

        //console.log(resp["data"]);

        postData(resp["data"]);

        console.log(img1);
        console.log(img2);
    }


    return(


        <div className="logo-similarity">
            <div className="nice-input">
            <div className={Input.form}>
                <div className={Input.title}>
                <Typing>
                    <h1 className={Input.title_text}>Logo Similarity Detector</h1>
                </Typing>
                </div>
            </div>
            <div className={Input.imgUpload}>
                <div class="columns">
                    <div class="column is-full">
                        <div className={Input.instruction}>
                            <p>Upload image(s) of your trademark logo and the logo you want to compare to (.png, .jpg):</p>
                        </div>
                        <div className={Input.trademarkLogo}>
                            <div class="file is-boxed">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="logo" onChange={fileSelectHandler}/>
                                        <span class="file-cta">
                                            <span class="file-icon">
                                                <i class="fa fa-upload"></i>
                                            </span>
                                            <span class="file-label">
                                                Upload an image of your logo (.png, .jpg)
                                            </span>
                                        </span>
                                </label>
                            </div>
                        </div>
                        <div className={Input.trademarkCompare}>
                            <div class="file is-boxed">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="logo" onChange={fileSelectHandler2}/>
                                        <span class="file-cta">
                                            <span class="file-icon">
                                                <i class="fa fa-upload"></i>
                                            </span>
                                            <span class="file-label">
                                                Upload an image of your logo (.png, .jpg)
                                            </span>
                                        </span>
                                </label>
                            </div>
                        </div>
                        <div className={Input.uploadButton}>
                            <button class="button is-link" onClick={submitImages}>Go!</button>
                        </div>
                    </div>
                </div>
            </div>
            {!disp_output?
            <div className={Input.outputSection2}>
                {prev1?
                <div>
                    <div>
                        <div>
                            <h1>Image 1</h1>
                            <img src={img1} width="200px" height="200px"/>
                        </div>
                    </div>
                </div>:""}
                {prev2?
                <div>
                    <div>
                        <div>
                            <h1>Image 2</h1>
                            <img src={img2} width="200px" height="200px"/>
                        </div>
                    </div>
                </div>:""}
            </div>:""}
            {disp_output?
            <div className={Input.outputSection}>
                <div className="container is-fluid">
                    <div className="notification is-info">
                        <meter value={similarity_score} min="0.00" max="5.00" optimum="0.10">{similarity_score}</meter>
                        <p className={Input.content}>The two images have a similarity score of {similarity_score}.</p>
                    </div>

                </div>
            </div>:""}
        </div>

            
        </div>
    )
}

export default TMAnalyze;