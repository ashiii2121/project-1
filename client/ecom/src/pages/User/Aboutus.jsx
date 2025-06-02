import React from 'react';
import './About.css';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted source for fresh food and quality products.</p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a passionate team dedicated to delivering fresh fruits,
          vegetables, and meats right to your doorstep. Our mission is to
          support local farmers and provide our customers with healthy,
          high-quality food at affordable prices.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>🌱 Freshness Guaranteed</li>
          <li>🚚 Fast & Safe Delivery</li>
          <li>🤝 Customer Satisfaction</li>
          <li>🌍 Sustainable Sourcing</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Contact Us</h2>
        <p>Email: support@ShopEasy.com</p>
        <p>Phone:  +1 (234) 567-8901</p>
      </div>
    </div>
  );
}

export default AboutUs;
