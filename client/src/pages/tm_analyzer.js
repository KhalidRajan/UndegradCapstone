import React from "react";
// import Uploady from "@rpldy/uploady";
// import UploadButton from "@rpldy/upload-button"
import Input from "../styles-css/input.module.css"

function TMAnalyze(){
    return(
        <div className={Input.background}>
            <div className={Input.form}>
                <h1 className={Input.title}>Trademark Analyzer Input</h1>
                <h1 className={Input.title}>Trademark Analyzer Input</h1>
                <br></br>
                <form>
                    <p>Upload trademark as image:</p>
                    <br></br>
                    {/* <Uploady destination={{url: process.env.UPLOAD_URL}}>
                        <UploadButton>Upload image</UploadButton>
                    </Uploady> */}
                    <br></br>
                    <br></br>
                    <p>Upload word mark:</p>
                    
                    <input type="text" id="word-mark" name="word-mark"></input>
                    <br></br>
                    <input type="submit" value="Submit"/>
                    <br></br>
                    <br></br>
                    <h1><b>Confusion Index:</b></h1>
                    <br></br>
                    <p>2. Degree of Attention</p>
                    <select>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <br></br>
                    <br></br>
                    <p>3. How similar are the visual appearances of the signs?</p>
                    <select>
                        <option value="None">No Similarity</option>
                        <option value="Low">Low Similarity</option>
                        <option value="High">High Similarity</option>
                        <option value="Identical">Identical</option>
                    </select>
                    <br></br>
                    <br></br>
                    <p>4. How similar are the signs phonetically?</p>
                    <select>
                        <option value="None">No Similarity</option>
                        <option value="Low">Low Similarity</option>
                        <option value="High">High Similarity</option>
                        <option value="Identical">Identical</option>
                    </select>
                    <br></br>
                    <br></br>
                    <p>5. How similar are the signs conceptually?</p>
                    <select>
                        <option value="None">No Similarity</option>
                        <option value="Low">Low Similarity</option>
                        <option value="High">High Similarity</option>
                        <option value="Identical">Identical</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default TMAnalyze;