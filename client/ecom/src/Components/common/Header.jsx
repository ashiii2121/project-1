import React from "react";
import { BiCart } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Navbar">
      <div className="logo">
        <h2>🛍️ <NavLink to="/">ShopEasy</NavLink></h2>
      </div>
      <div className="nav-links">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/category">Category</NavLink></li>
        </ul>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div>
      <div className="auth-buttons">
        <NavLink to="/login" className="auth-btn">Login</NavLink>
        <NavLink to="/signup" className="auth-btn signup">Sign Up</NavLink>
      </div>
      <div className="nav-icons">
        <NavLink to="/cart">
          <BiCart className="nav-icon" />
          <span className="cart-count">0</span>
        </NavLink>
        <NavLink to="/Profile">
          <BiUser className="nav-icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
