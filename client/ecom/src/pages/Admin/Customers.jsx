import React from "react";
import {
  FaUserCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const customersData = [
  {
    id: "CUST-001",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 555-1234",
    status: "Active",
    joined: "2023-09-12",
  },
  {
    id: "CUST-002",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 555-5678",
    status: "Inactive",
    joined: "2023-10-05",
  },
  {
    id: "CUST-003",
    name: "Michael Lee",
    email: "michael@example.com",
    phone: "+1 555-8765",
    status: "Active",
    joined: "2024-01-21",
  },
  {
    id: "CUST-004",
    name: "Emily Clark",
    email: "emily@example.com",
    phone: "+1 555-4321",
    status: "Active",
    joined: "2024-03-14",
  },
];

const statusIcon = {
  Active: <FaCheckCircle style={{ color: "#22c55e" }} />,
  Inactive: <FaTimesCircle style={{ color: "#ef4444" }} />,
};

const Customers = () => {
  return (
    <div
      style={{
        padding: "2rem",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
          color: "#3b3b5c",
        }}
      >
        Admin Customers
      </h2>
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(60,60,120,0.10)",
          padding: "2rem",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "Segoe UI, Arial, sans-serif",
          }}
        >
          <thead>
            <tr style={{ background: "#6366f1", color: "#fff" }}>
              <th
                style={{
                  padding: "1rem",
                  borderRadius: "8px 0 0 8px",
                  textAlign: "left",
                }}
              >
                <FaUserCircle /> Name
              </th>
              <th style={{ padding: "1rem", textAlign: "left" }}>
                <FaEnvelope /> Email
              </th>
              <th style={{ padding: "1rem", textAlign: "left" }}>
                <FaPhone /> Phone
              </th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Joined</th>
              <th
                style={{
                  padding: "1rem",
                  borderRadius: "0 8px 8px 0",
                  textAlign: "left",
                }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((customer) => (
              <tr
                key={customer.id}
                style={{
                  background: "#f3f4f6",
                  borderBottom: "2px solid #e0e7ff",
                  transition: "background 0.2s",
                }}
              >
                <td
                  style={{
                    padding: "1rem",
                    fontWeight: "600",
                    color: "#6366f1",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaUserCircle style={{ color: "#6366f1" }} /> {customer.name}
                </td>
                <td style={{ padding: "1rem" }}>{customer.email}</td>
                <td style={{ padding: "1rem" }}>{customer.phone}</td>
                <td style={{ padding: "1rem" }}>{customer.joined}</td>
                <td
                  style={{
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {statusIcon[customer.status]}{" "}
                  <span style={{ fontWeight: "500" }}>{customer.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
