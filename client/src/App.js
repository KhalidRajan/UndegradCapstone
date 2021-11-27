import React from "react";
import Navigation from "./pages/navigation";
import Landing from "./pages/landing";
import About from "./pages/about";
import Team from "./pages/team";
import Form from "./pages/form";

import {BrowserRouter, Routes, Route} from "react-router-dom";



function App(){
    return(
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/form" element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;