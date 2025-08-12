import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Dashboard</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1.5rem",
            background: "#f9f9f9",
            cursor: "pointer",
          }}
          onClick={() => navigate("/admin/products")}
        >
          <h3>Products</h3>
          <p>Manage all products here.</p>
        </div>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1.5rem",
            background: "#f9f9f9",
            cursor: "pointer",
          }}
          onClick={() => navigate("/admin/orders")}
        >
          <h3>Orders</h3>
          <p>View and process orders.</p>
        </div>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1.5rem",
            background: "#f9f9f9",
            cursor: "pointer",
          }}
          onClick={() => navigate("/admin/customers")}
        >
          <h3>Customers</h3>
          <p>Customer information and management.</p>
        </div>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1.5rem",
            background: "#f9f9f9",
          }}
        >
          <h3>Settings</h3>
          <p>Configure dashboard settings.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
