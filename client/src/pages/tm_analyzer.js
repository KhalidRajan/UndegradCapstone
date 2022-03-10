import React from "react";
import Typing from "react-typing-animation";
import Input from "../styles-css/input.module.css";

function TMAnalyze(){
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
                            <button class="button is-link">Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
        </div>
    )
}

export default TMAnalyze;