import React from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button"
import Input from "../styles-css/input.module.css"

function TMAnalyze(){
    return(
        <div className={Input.background}>
            <div className={Input.form}>
                <h1 className={Input.title}>Trademark Analyzer Input</h1>
                <h1 className={Input.title}>Trademark Analyzer Input</h1>
                <br></br>
                <p>Upload trademark as image:</p>
                <br></br>
                <Uploady destination={{url: process.env.UPLOAD_URL}}>
                    <UploadButton>Upload image</UploadButton>
                </Uploady>
                <br></br>
                <br></br>
                <p>Upload word mark:</p>
                <form>
                    <input type="text" id="word-mark" name="word-mark"></input>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default TMAnalyze;