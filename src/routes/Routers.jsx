import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/FrontEnd/Home";
import About from "../pages/FrontEnd/About";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
