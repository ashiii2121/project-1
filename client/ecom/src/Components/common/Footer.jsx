import React, { useState } from "react";
import "./footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle newsletter subscription
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="modern-footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay Updated!</h3>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest deals and fresh product
              updates.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <div className="newsletter-input-group">
              <FaEnvelope className="newsletter-icon" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                <FaArrowRight />
              </button>
            </div>
            {isSubscribed && (
              <div className="newsletter-success">
                <FaHeart /> Thank you for subscribing!
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-section brand-section">
          <div className="brand-logo">
            <FaShoppingBag className="brand-icon" />
            <h3 className="brand-name">ShopEasy</h3>
          </div>
          <p className="brand-description">
            Your trusted partner for fresh groceries and quality products. We
            deliver happiness to your doorstep with the finest selection of
            organic and fresh produce.
          </p>
          <div className="social-links">
            <a href="#" className="social-link facebook" title="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-link twitter" title="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-link instagram" title="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-link linkedin" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="social-link youtube" title="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h4 className="section-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="/" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/category" className="footer-link">
                Categories
              </a>
            </li>
            <li>
              <a href="/fruits" className="footer-link">
                Fresh Fruits
              </a>
            </li>
            <li>
              <a href="/vegetables" className="footer-link">
                Vegetables
              </a>
            </li>
            <li>
              <a href="/meat" className="footer-link">
                Meat & Poultry
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section links-section">
          <h4 className="section-title">Customer Service</h4>
          <ul className="footer-links">
            <li>
              <a href="/contact" className="footer-link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="footer-link">
                FAQ
              </a>
            </li>
            <li>
              <a href="/shipping" className="footer-link">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="/returns" className="footer-link">
                Returns
              </a>
            </li>
            <li>
              <a href="/privacy" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="footer-link">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h4 className="section-title">Get in Touch</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Address</span>
                <span className="contact-value">
                  123 Fresh Street, Green City, GC 12345
                </span>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+1 (234) 567-8901</span>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">support@shopeasy.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} ShopEasy. All rights reserved.
            </p>
            <p className="tagline">
              Made with <FaHeart className="heart-icon" /> for fresh food lovers
            </p>
          </div>
          <div className="payment-methods">
            <span className="payment-label">We Accept:</span>
            <div className="payment-icons">
              <div className="payment-icon">VISA</div>
              <div className="payment-icon">MC</div>
              <div className="payment-icon">AMEX</div>
              <div className="payment-icon">PayPal</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
