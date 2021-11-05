import React from "react";
import Typewriter from "typewriter-effect";

function Landing(){
    return(
        <div className="landing">
            <h1>TradeMarquis</h1>
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
        </div>

    );
}

export default Landing;