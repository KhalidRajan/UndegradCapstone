import React from "react";
import {Link} from "react-router-dom";
import "../styles-css/model_select.css";
import Typing from "react-typing-animation";


function ModelSelect(){
    return(
        <div className="model-select">
            <div className="section-title">
                <Typing>
                    <h1 className="title-text">Select the Tool You Would Like to Use</h1>
                </Typing>
            </div>

            <div className="products">
                <div class="columns">
                    <div class="column is-half">
                        <div className="product1">
                            <div class="card">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        NICE Category Classifier
                                    </p>
                                </header>
                                <div class="card-image">
                                    <figure class="image is-256x256">
                                        <img src="images/product_1.jpg" alt="NICE Category Classifier"/>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <p>Classifying product descriptions into NICE categories defined by the World Intellectual Property Organization (WIPO).</p>
                                    </div>
                                </div>
                                <button class="nice-button button is-link">
                                    <Link className="link-text" to={"/nice-input"}>Check It Out!</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <div className="product2">
                            <div class="card">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        Logo Similarity Detector
                                    </p>
                                </header>
                                <div class="card-image">
                                    <figure class="image is-256x256">
                                        <img src="images/product_2.jpg" alt="Logo Similarity Comparison"/>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <p>Comparing inputted logos to a database of logos to identify similar logos and compute similarity scores between the inputted logo and other logos in the database.</p>
                                    </div>
                                </div>
                                <button class="logo-button button is-link">
                                    <Link className="link-text" to={"/tm-analyze-input"}>Check It Out!</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* <p><Link to={"/nice-input"}>NICE Classifier</Link></p>
            <br></br>
            <p><Link to={"/tm-analyze-input"}>Trademark Analyzer</Link></p> */}
        </div>
    )
}

export default ModelSelect;