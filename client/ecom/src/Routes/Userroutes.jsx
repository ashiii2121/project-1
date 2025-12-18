import React from "react";
import Userlayout from "../Layout/Userlayout";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/User/Home";
import Order from "../pages/User/Order";
import Checkout from "../pages/User/Checkout";
import Cart from "../pages/User/Cart";
import Category from "../pages/User/Category";
import Aboutus from "../pages/User/Aboutus";
import Fruits from "../Components/user/Fruits";
import Vegetables from "../Components/user/Vegitable";
import Meat from "../Components/user/Meat";
import Login from "../pages/User/Login";
import SignupForm from "../pages/User/Signup";
import Profile from "../pages/User/Profile";
import ProductDetail from "../pages/User/Productdetails";
import Wishlist from "../pages/User/Wishlist";

function Userroutes() {
  return (
    <Routes>
      <Route path="/" element={<Userlayout />}>
        <Route index element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="category" element={<Category />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="vegetables" element={<Vegetables />} />
        <Route path="meat" element={<Meat />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="profile" element={<Profile />} />
        <Route path="productdetail" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default Userroutes;
