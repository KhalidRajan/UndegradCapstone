import axios from 'axios';
import Input from "../styles-css/input.module.css"
import Typing from "react-typing-animation";
import React, { useState } from 'react';
import nice_mapping from "./nice_map";




function NiceInput(){

    const [disp_output, setDispOutput]=useState(false);

    const [nice_cat, setNiceCat]=useState("");
    
    const [nice_cat_desc, setNiceCatDesc]=useState("");

    const postData=()=>{

        const ax_headers = {
            'Accept': 'application/json',
            'Content-type': 'text/html'
        }
    
        var input_text = '';
        
        input_text = document.getElementById("inputText").value;

        var config = {
            method: 'post',
            url: '/predictions/nice-dbert',
            data: input_text,
            headers: ax_headers
        }
    
        axios(config).then(function (resp){
            var category = resp.data.slice(5);
            setDispOutput(true);
            setNiceCat(category);
            setNiceCatDesc(nice_mapping[resp.data]);
        }).catch(function(e){
            console.log(e);
        });
    
    }




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
                            <textarea id="inputText" class="textarea is-link" placeholder="Enter your text here..."></textarea>
                        </div>
                        <div className={Input.button}>
                                <button class="button is-link" onClick={ () => postData()}>Go!</button>
                        </div>
                    </div>
                </div>
            </div>
            {disp_output?
            <div className={Input.outputSection}>
                <div className="container is-fluid">
                    <div className="notification is-info">
                        <p className={Input.content}>The product/service belongs to Nice Category {nice_cat}.</p>
                    </div>
                    <div className="notification is-success">
                        <p className={Input.content}>This category includes : {nice_cat_desc}</p>
                    </div>
                </div>
            </div>:""}
        </div>

    )
}

export default NiceInput;
