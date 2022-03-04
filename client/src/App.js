import React, { useState } from "react";
import Navigation from "./pages/navigation";
import Landing from "./pages/landing";
import About from "./pages/about";
import Team from "./pages/team";
import NiceInput from "./pages/nice_input";
import TMAnalyze from "./pages/tm_analyzer"
import ModelSelect from "./pages/model_selection"
import NiceResult from "./pages/nice_output"
import TMResult from "./pages/tm_result"

import {BrowserRouter, Routes, Route} from "react-router-dom";



function App(){

    return(
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/nice-input" element={<NiceInput/>}/>
                <Route path="/nice-output" element={<NiceResult/>}/>
                <Route path="/tm-analyze-input" element={<TMAnalyze/>}/>
                <Route path="/tm-analyze-output" element={<TMResult/>}/>
                <Route path="/model-select" element={<ModelSelect/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;