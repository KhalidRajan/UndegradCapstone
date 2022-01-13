import React from "react";
import "../styles-css/about.css"

function About(){
    return(
        <div class="about">
            <div className="purpose">
                <div class="container is-fluid">
                    <div class="notification is-info">
                        <h1 className="section-heading">The Purpose</h1>
                        <p className="content">
                        The legal and financial ramifications of trademark infringements are severe for companies that violate another company's trademark.  It is etimated that trademark 
                        infringements can result in lawsuits with costs that range on average between $120,000 - $750,000 depending on the nuances of a particular case.

                        TradeMarquis's objective is to leverage the power of exponential technologies to create a product that enables companies to identify and avoid trademark infringements early and 
                        thereby avoid the financial penalties that they can impose.
                        </p>
                    </div>
                </div>
            </div>
            <div className="solution">
                <div class="container is-fluid">
                    <div class="notification is-success">
                        <h1 className="section-heading">The Solution</h1>
                        <p className="content">
                        Leveraging the power of Deep Learning, Natural Language Processing and Data Analytics, TradeMarquis is a web-based tool that identifies potential trademark infringements.  TradeMarquis 
                        follows a 2-step process to recognizing trademark violations.  Firstly, the product utilizies a Transformer-based model to classify product descriptions into NICE product categories identified by
                        the World Intellectual Property Organization (WIPO).  Next, the product utilizies a Siamese Convolutional Neural Network to compare a logo inputted by the user to other logos in our database for similarity.
                        The Siamese CNN outputs a similarity score indicating how similar the two logos are.

                        The NICE category that a product belongs to along with a logo similarity score provide a strong indication of potential trademark violation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;