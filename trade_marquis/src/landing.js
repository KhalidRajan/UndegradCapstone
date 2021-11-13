import React from "react";
import Typewriter from "typewriter-effect";
import "./landing.css";

function Landing(){
    return(
        <div className="landing">
            <h1 class="projectName">TradeMarquis</h1>
            <div className="typewrite">
                <Typewriter
                    onInit={(typewriter)=>{
                        typewriter
                        .typeString("Detect trademark conflicts")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Discover trademark clashes in your product descriptions")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Identify trademark collisions in your logos")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Protect your trademark!")
                        .start();
                    }}
                />
            </div>
            <div class="landing-image">
                <img class="trademark-image" src="images/khalid.jpg"/>
            </div>
            <div class="start-button">
                <button class="button is-primary">Try It Out!</button>
            </div>
        </div>
    );
}

export default Landing;