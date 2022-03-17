import React from "react";
import Typing from "react-typing-animation";
import Input from "../styles-css/input.module.css";
import { useState } from 'react';

function TMAnalyze(){

    const [disp_output, setDispOutput]=useState(false);
    const [similarity_score, setSimilarityScore]=useState(0.0);

    const postData=()=>{
        setDispOutput(true);
        setSimilarityScore(0.37);
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
                                    <input class="file-input" type="file" name="logo"/>
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
                                    <input class="file-input" type="file" name="logo"/>
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
                            <button class="button is-link" onClick={ () => postData()}>Go!</button>
                        </div>
                    </div>
                </div>
            </div>
            {disp_output?
            <div className={Input.outputSection}>
                <div className="container is-fluid">
                    <div className="notification is-info">
                        <p className={Input.content}>The two images have a similarity score of {similarity_score}.</p>
                    </div>

                </div>
            </div>:""}
        </div>

            
        </div>
    )
}

export default TMAnalyze;