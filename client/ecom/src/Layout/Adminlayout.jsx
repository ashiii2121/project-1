import React from "react";
import Navbar from "../Components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/common/Footer";

function Adminlayout() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <nav
          style={{ width: "220px", background: "#f5f5f5", padding: "20px 0" }}
        >
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="/admin/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/admin/products">Products</a>
            </li>
            <li>
              <a href="/admin/orders">Orders</a>
            </li>
            <li>
              <a href="/admin/customers">Customers</a>
            </li>
            <li>
              <a href="/admin/inventory">Inventory</a>
            </li>
            <li>
              <a href="/admin/reports">Reports</a>
            </li>
            <li>
              <a href="/admin/settings">Settings</a>
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
