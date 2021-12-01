import React from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button"
import "../styles-css/input.css";

function TMAnalyze(){
    return(
        <div className="background">
            <div className="form">
                <h1 className="title">Trademark Analyzer Input</h1>
                <h1 className="title">Trademark Analyzer Input</h1>
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