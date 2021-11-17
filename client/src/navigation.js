import React from "react";

function Navigation(){
    return(
        <div class="navigation-bar">
            <nav class="navbar" role="navigation" aria-label="main-navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src="images/ConflictAnalyticsLogo.png" alt="Conflict Analytics Lab"/>
                    </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item" href="/about">About</a>
                        <a class="navbar-item" href="/team">The Team</a>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navigation;