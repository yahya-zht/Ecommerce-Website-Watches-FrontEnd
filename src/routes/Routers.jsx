import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/FrontEnd/Home";
import About from "../pages/FrontEnd/About";
import Products from "../pages/FrontEnd/Products";
import Categories from "../pages/FrontEnd/Categories";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Categories" element={<Categories />} />
        {/* <Route path="/About" element={<Abo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
