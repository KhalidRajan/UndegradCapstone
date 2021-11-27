import React from "react";
import {Link} from "react-router-dom";

function ModelSelect(){
    return(
        <div>
            <h1>Select which tool</h1>
            <br></br>
            <p><Link to={"/nice-input"}>NICE Classifier</Link></p>
            <br></br>
            <p><Link to={"/tm-analyze-input"}>Trademark Analyzer</Link></p>
        </div>
    )
}

export default ModelSelect;