import React from "react";
import Navigation from "./pages/navigation";
import Landing from "./pages/landing";
import About from "./pages/about";
import Team from "./pages/team";
import Nice from "./pages/nice_input";

import {BrowserRouter, Routes, Route} from "react-router-dom";



function App(){
    return(
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/nice-input" element={<Nice/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;