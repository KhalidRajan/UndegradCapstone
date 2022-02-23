import React from "react";
import Input from "../styles-css/input.module.css"
import Typing from "react-typing-animation";

function NiceInput(){
    return(

        <div className="nice-input">
            <div className={Input.form}>
                <div className={Input.title}>
                <Typing>
                    <h1 className={Input.title_text}>NICE Category Classifier</h1>
                </Typing>
                </div>
            </div>
            <div className={Input.inputSection}>
                <div class="columns">
                    <div class="column is-full">
                        <div className={Input.instruction}>
                            <p>Enter a product description or keywords to describe the products/services that will be offered under this trademark: </p>
                        </div>

                        <div className={Input.textArea}>
                            <textarea class="textarea is-link" placeholder="Enter your text here..."></textarea>
                        </div>
                        <div className={Input.button}>
                            <button class="button is-link">Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NiceInput;