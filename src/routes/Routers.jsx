import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/FrontEnd/Home";
import About from "../pages/FrontEnd/About";
import Products from "../pages/FrontEnd/Products";
import Categories from "../pages/FrontEnd/Categories";
import Contact from "../pages/FrontEnd/Contact";
import ShowProduct from "../pages/FrontEnd/ShowProduct";
import ShoppingCart from "../pages/FrontEnd/ShoppingCart";
import Dashborad from "../pages/Admin/Dashboard";
import AllProducts from "../pages/Admin/Products/AllProducts";
import Index from "../pages/Admin/Index";
import AllCategories from "../pages/Admin/Categories/AllCategories";
import Profile from "../pages/Admin/Profile/Profile";
// import Customers from "../pages/Admin/Customers";
// import Orders from "../pages/Admin/Orders";
import AddProduct from "../pages/Admin/Products/AddProduct";
import UpdateProduct from "../pages/Admin/Products/UpdateProduct";
import ShowProductAD from "../pages/Admin/Products/ShowProductAD";
import Order from "../pages/FrontEnd/Order";
import Payment from "../pages/FrontEnd/Payment";
import AllProviders from "../pages/Admin/Providers/AllProvider";
import AllCustomers from "../pages/Admin/Customers/AllCustomers";
import AllOrders from "../pages/Admin/Orders/AllOrders";
import CreateCategory from "../pages/Admin/Categories/CreateCategory";
import EditCustomer from "../pages/Admin/Customers/EditCustomer";
import CreateProvider from "../pages/Admin/Providers/CreateProvider";
import EditProvider from "../pages/Admin/Providers/EditProvider";
import ShowOrder from "../pages/Admin/Orders/ShowOrder";
import ShowCategory from "../pages/FrontEnd/ShowCategory";
import CategoriesIndex from "../pages/FrontEnd/CategoriesIndex";
import Login from "../pages/Admin/Login";
import Register from "../pages/Admin/Register";
import AuthProvider from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import EditCategory from "../pages/Admin/Categories/EditCategory";
import AllMessages from "../pages/Admin/Messages/AllMessages";
import ShowMessage from "../pages/Admin/Messages/ShowMessage";

export default function Routers() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Product/:id" element={<ShowProduct />} />
          <Route path="/Categories" element={<CategoriesIndex />}>
            <Route path="" element={<Categories />} />
            <Route path="Show" element={<ShowCategory />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Order" element={<Payment />} />
          <Route path="/Orderconfirmed" element={<Order />} />
          <Route element={<PrivateRoute />}>
            <Route path="/Admin" element={<Index />}>
              <Route path="" element={<Dashborad />} />
              <Route path="Products" element={<AllProducts />} />
              <Route path="Products/Create" element={<AddProduct />} />
              <Route path="Products/Edit/:id" element={<UpdateProduct />} />
              <Route path="Products/Show/:id" element={<ShowProductAD />} />
              <Route path="Categories" element={<AllCategories />} />
              <Route path="Categories/Create" element={<CreateCategory />} />
              <Route path="Categories/Edit/:id" element={<EditCategory />} />
              <Route path="Providers" element={<AllProviders />} />
              <Route path="Providers/Create" element={<CreateProvider />} />
              <Route path="Providers/Edit/:id" element={<EditProvider />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="Messages" element={<AllMessages />} />
              <Route path="Messages/Show/:id" element={<ShowMessage />} />
              <Route path="Customers" element={<AllCustomers />} />
              <Route path="Customers/Edit/:id" element={<EditCustomer />} />
              <Route path="Orders" element={<AllOrders />} />
              <Route path="Orders/Show/:id" element={<ShowOrder />} />
              <Route path="Register" element={<Register />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
