import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/FrontEnd/Home";
import About from "../pages/FrontEnd/About";
import Products from "../pages/FrontEnd/Products";
import Categories from "../pages/FrontEnd/Categories";
import Contact from "../pages/FrontEnd/Contact";
import ShowProduct from "../pages/FrontEnd/ShowProduct";
import ShoppingCart from "../pages/FrontEnd/ShoppingCart";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Product" element={<ShowProduct />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}
