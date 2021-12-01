import React from "react";
import Input from "../styles-css/input.module.css"

function Form(){
    return(
        <div className={Input.background}>
            <div className={Input.form}>
                <h1 className={Input.title}>Input information for NICE classifier</h1>
                <form>
                    <label><h1 className={Input.title}>Input information for NICE Classifier</h1></label>
                    <label>
                        <br></br>
                        Describe the product(s) and/or service(s) that will be provided under this trademark:
                        <br></br>
                        <textarea cols="50" rows="10" id={Input.descriptor} type="text" name="descriptor"> Input description...</textarea>
                    </label>
                    <br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Form;