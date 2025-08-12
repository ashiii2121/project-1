import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        background: "linear-gradient(90deg, #43c6ac 0%, #f8ffae 100%)",
        color: "#222",
        borderRadius: "18px 18px 0 0",
        boxShadow: "0 -4px 24px rgba(67,198,172,0.10)",
        marginTop: "48px",
        padding: "40px 0 0 0",
      }}
    >
      <div
        className="footer-content"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div className="footer-section" style={{ flex: "1 1 250px" }}>
          <h3
            style={{
              color: "#43c6ac",
              fontWeight: "bold",
              fontSize: "1.6rem",
              marginBottom: "15px",
            }}
          >
            ShopEasy
          </h3>
          <p style={{ fontSize: "1rem", color: "#444" }}>
            Your one-stop shop for fresh groceries and quality products.
          </p>
          <div style={{ marginTop: "18px", display: "flex", gap: "16px" }}>
            <a href="#" style={{ color: "#43c6ac", fontSize: "1.5rem" }}>
              <FaFacebook />
            </a>
            <a href="#" style={{ color: "#43c6ac", fontSize: "1.5rem" }}>
              <FaTwitter />
            </a>
            <a href="#" style={{ color: "#43c6ac", fontSize: "1.5rem" }}>
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section" style={{ flex: "1 1 250px" }}>
          <h4
            style={{
              color: "#43c6ac",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "15px",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            <li style={{ marginBottom: "8px" }}>
              <a
                href="/"
                style={{
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.2s",
                }}
              >
                Home
              </a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a
                href="/about"
                style={{
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.2s",
                }}
              >
                About Us
              </a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a
                href="/products"
                style={{
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.2s",
                }}
              >
                Shop
              </a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a
                href="/category"
                style={{
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.2s",
                }}
              >
                Category
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section" style={{ flex: "1 1 250px" }}>
          <h4
            style={{
              color: "#43c6ac",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "15px",
            }}
          >
            Contact
          </h4>
          <p style={{ fontSize: "1rem", color: "#444", marginBottom: "8px" }}>
            Email: support@shopeasy.com
          </p>
          <p style={{ fontSize: "1rem", color: "#444" }}>
            Phone: +1 (234) 567-8901
          </p>
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          textAlign: "center",
          padding: "18px 0",
          color: "#222",
          fontWeight: "500",
          fontSize: "1rem",
          borderTop: "1px solid #43c6ac",
          marginTop: "32px",
        }}
      >
        <p>&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
