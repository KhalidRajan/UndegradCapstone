import React from "react";
import Navigation from "./navigation";
import Landing from "./landing";
import About from "./about";
import Team from "./team";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App(){
    return(
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/team" element={<Team/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;