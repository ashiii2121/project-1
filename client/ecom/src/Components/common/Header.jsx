import React, { useState, useEffect } from "react";
import { BiCart, BiUser, BiSearch, BiMenu, BiX } from "react-icons/bi";
import {
  FaShoppingBag,
  FaHeart,
  FaBell,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should come from your auth context
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    // Add logout logic here
    setIsLoggedIn(false);
    setIsProfileDropdownOpen(false);
    navigate("/");
  };

  return (
    <nav className={`modern-navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-brand">
          <NavLink to="/" className="brand-link">
            <FaShoppingBag className="brand-icon" />
            <span className="brand-text">ShopEasy</span>
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/category"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
                <MdKeyboardArrowDown className="dropdown-icon" />
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/fruits" className="dropdown-item">
                  Fresh Fruits
                </NavLink>
                <NavLink to="/vegetables" className="dropdown-item">
                  Vegetables
                </NavLink>
                <NavLink to="/meat" className="dropdown-item">
                  Meat & Poultry
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search for fresh groceries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <BiSearch />
            </button>
          </form>
        </div>

        {/* Right Side Icons & Auth */}
        <div className="navbar-actions">
          <div className="action-icons">
            <NavLink to="/wishlist" className="action-icon" title="Wishlist">
              <FaHeart />
              <span className="icon-badge">2</span>
            </NavLink>
            <NavLink to="/cart" className="action-icon" title="Shopping Cart">
              <BiCart />
              <span className="icon-badge">3</span>
            </NavLink>
            <button
              className="action-icon notification-btn"
              title="Notifications"
            >
              <FaBell />
              <span className="icon-badge">5</span>
            </button>
          </div>

          <div className="auth-section">
            {isLoggedIn ? (
              <div className="profile-dropdown">
                <button
                  className="profile-btn"
                  onClick={toggleProfileDropdown}
                  title="Profile"
                >
                  <BiUser />
                  <span className="profile-name">John Doe</span>
                  <MdKeyboardArrowDown className="dropdown-icon" />
                </button>
                {isProfileDropdownOpen && (
                  <div className="profile-dropdown-menu">
                    <NavLink to="/profile" className="dropdown-item">
                      <FaUser /> My Profile
                    </NavLink>
                    <NavLink to="/order" className="dropdown-item">
                      <FaShoppingBag /> My Orders
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="dropdown-item logout-btn"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink to="/login" className="auth-btn login-btn">
                  Login
                </NavLink>
                <NavLink to="/signup" className="auth-btn signup-btn">
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Header;
