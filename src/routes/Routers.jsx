import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/FrontEnd/Home";
import About from "../pages/FrontEnd/About";
import Products from "../pages/FrontEnd/Products";
import Categories from "../pages/FrontEnd/Categories";
import Contact from "../pages/FrontEnd/Contact";
import ShowProduct from "../pages/FrontEnd/ShowProduct";
import ShoppingCart from "../pages/FrontEnd/ShoppingCart";
import Dashborad from "../pages/Admin/Dashborad";
import AllProducts from "../pages/Admin/Products/AllProducts";
import Index from "../pages/Admin/Index";
import AllCategories from "../pages/Admin/Categories/AllCategories";
import Profile from "../pages/Admin/Profile/Profile";
import Customers from "../pages/Admin/Customers";
import Orders from "../pages/Admin/Orders";
import AddProduct from "../pages/Admin/Products/AddProduct";
import UpdateProduct from "../pages/Admin/Products/UpdateProduct";
import ShowProductAD from "../pages/Admin/Products/ShowProductAD";
import Order from "../pages/FrontEnd/Order";
import Payment from "../pages/FrontEnd/Payment";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Product/:id" element={<ShowProduct />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Order" element={<Payment />} />
        <Route path="/ConfirmOrder" element={<Order />} />
        <Route path="/Admin" element={<Index />}>
          <Route path="" element={<Dashborad />} />
          <Route path="Products" element={<AllProducts />} />
          <Route path="Products/Create" element={<AddProduct />} />
          <Route path="Products/Edit/:id" element={<UpdateProduct />} />
          <Route path="Products/Show/:id" element={<ShowProductAD />} />
          <Route path="Categories" element={<AllCategories />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Customers" element={<Customers />} />
          <Route path="Orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
