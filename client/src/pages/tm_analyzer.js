import React from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button"

function TMAnalyze(){
    return(
        <div>
            <h1>Trademark Analyzer</h1>
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
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default TMAnalyze;