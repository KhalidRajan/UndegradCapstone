import React from "react";
import "../styles-css/form.css";

function Form(){
    return(
        <div className="form">
            <h1><b>Input information:</b></h1>
            <form>
                <label>
                    <br></br>
                    Describe the product(s) and/or service(s) that will be provided under this trademark:
                    <br></br>
                    <textarea cols="80" rows="10" id="descriptor" type="text" name="descriptor"> Input description...</textarea>
                </label>
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form;