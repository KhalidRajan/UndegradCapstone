import axios from 'axios';
import Input from "../styles-css/input.module.css"
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";

let nice_output;

async function postData(){

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
        nice_output = resp;
        alert(JSON.stringify(resp.data));
    }).catch(function(e){
        console.log(e);
    });

}

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
                            <textarea id="inputText" class="textarea is-link" placeholder="Enter your text here..."></textarea>
                        </div>
                        <div className={Input.button}>
                            <Link to={"/nice-output"}>
                                <button class="button is-link" onClick={ () => postData()}>Go!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NiceInput;
