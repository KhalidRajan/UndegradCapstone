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
                            <p>Upload an image of your trademark logo (.png, .jpg):</p>
                        </div>
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
                        <div className={Input.button}>
                            <button class="button is-link">Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
        </div>

        // <div className={Input.background}>
        //     <div className={Input.form}>
        //         <h1 className={Input.title}>Trademark Analyzer Input</h1>
        //         <h1 className={Input.title}>Trademark Analyzer Input</h1>
        //         <br></br>
        //         <form>
        //             <p>Upload trademark as image:</p>
        //             <br></br>
        //             {/* <Uploady destination={{url: process.env.UPLOAD_URL}}>
        //                 <UploadButton>Upload image</UploadButton>
        //             </Uploady> */}
        //             <br></br>
        //             <br></br>
        //             <p>Upload word mark:</p>
                    
        //             <input type="text" id="word-mark" name="word-mark"></input>
        //             <br></br>
        //             <input type="submit" value="Submit"/>
        //             <br></br>
        //             <br></br>
        //             <h1><b>Confusion Index:</b></h1>
        //             <br></br>
        //             <p>2. Degree of Attention</p>
        //             <select>
        //                 <option value="Low">Low</option>
        //                 <option value="Medium">Medium</option>
        //                 <option value="High">High</option>
        //             </select>
        //             <br></br>
        //             <br></br>
        //             <p>3. How similar are the visual appearances of the signs?</p>
        //             <select>
        //                 <option value="None">No Similarity</option>
        //                 <option value="Low">Low Similarity</option>
        //                 <option value="High">High Similarity</option>
        //                 <option value="Identical">Identical</option>
        //             </select>
        //             <br></br>
        //             <br></br>
        //             <p>4. How similar are the signs phonetically?</p>
        //             <select>
        //                 <option value="None">No Similarity</option>
        //                 <option value="Low">Low Similarity</option>
        //                 <option value="High">High Similarity</option>
        //                 <option value="Identical">Identical</option>
        //             </select>
        //             <br></br>
        //             <br></br>
        //             <p>5. How similar are the signs conceptually?</p>
        //             <select>
        //                 <option value="None">No Similarity</option>
        //                 <option value="Low">Low Similarity</option>
        //                 <option value="High">High Similarity</option>
        //                 <option value="Identical">Identical</option>
        //             </select>
        //         </form>
        //     </div>
        // </div>
    )
}

export default TMAnalyze;