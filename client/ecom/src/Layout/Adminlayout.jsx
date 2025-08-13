import React from "react";
import Navbar from "../Components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/common/Footer";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaWarehouse,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

function Adminlayout() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <nav
          style={{
            width: "220px",
            background: "linear-gradient(135deg, #6366f1 0%, #60a5fa 100%)",
            padding: "24px 0",
            minHeight: "100vh",
            boxShadow: "0 2px 8px rgba(60,60,120,0.08)",
            borderRadius: "0 24px 24px 0",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 18 }}>
              <a
                href="/admin/dashboard"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 17,
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: 12,
                  transition: "background 0.2s",
                }}
              >
                <FaTachometerAlt style={{ fontSize: 20 }} />
                <span>Dashboard</span>
              </a>
            </li>
            <li style={{ marginBottom: 18 }}>
              <a
                href="/admin/products"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 17,
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: 12,
                  transition: "background 0.2s",
                }}
              >
                <FaBoxOpen style={{ fontSize: 20 }} />
                <span>Products</span>
              </a>
            </li>
            <li style={{ marginBottom: 18 }}>
              <a
                href="/admin/orders"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 17,
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: 12,
                  transition: "background 0.2s",
                }}
              >
                <FaShoppingCart style={{ fontSize: 20 }} />
                <span>Orders</span>
              </a>
            </li>
            <li style={{ marginBottom: 18 }}>
              <a
                href="/admin/customers"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 17,
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: 12,
                  transition: "background 0.2s",
                }}
              >
                <FaUsers style={{ fontSize: 20 }} />
                <span>Customers</span>
              </a>
            </li>
            <li style={{ marginBottom: 18 }}>
              <a
                href="/admin/inventory"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 17,
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: 12,
                  transition: "background 0.2s",
                }}
              >
                <FaWarehouse style={{ fontSize: 20 }} />
                <span>Inventory</span>
              </a>
            </li>
            <li style={{ marginBottom: 18 }}>
              <a
                href="/admin/reports"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 17,
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: 12,
                  transition: "background 0.2s",
                }}
              >
                <FaChartBar style={{ fontSize: 20 }} />
                <span>Reports</span>
              </a>
            </li>
            <li style={{ marginBottom: 18 }}>
              <a
                href="/admin/settings"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 17,
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: 12,
                  transition: "background 0.2s",
                }}
              >
                <FaCog style={{ fontSize: 20 }} />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
        <main style={{ flex: 1, padding: "20px" }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Adminlayout;
