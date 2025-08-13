import React from "react";
import {
  FaBoxOpen,
  FaCheckCircle,
  FaTimesCircle,
  FaTruck,
  FaUser,
} from "react-icons/fa";

const ordersData = [
  {
    id: "ORD-1001",
    customer: "John Doe",
    total: "$120.00",
    status: "Shipped",
    date: "2024-06-01",
  },
  {
    id: "ORD-1002",
    customer: "Jane Smith",
    total: "$75.50",
    status: "Delivered",
    date: "2024-06-02",
  },
  {
    id: "ORD-1003",
    customer: "Michael Lee",
    total: "$210.99",
    status: "Pending",
    date: "2024-06-03",
  },
  {
    id: "ORD-1004",
    customer: "Emily Clark",
    total: "$49.99",
    status: "Cancelled",
    date: "2024-06-04",
  },
];

const statusIcon = {
  Shipped: <FaTruck style={{ color: "#60a5fa" }} />,
  Delivered: <FaCheckCircle style={{ color: "#22c55e" }} />,
  Pending: <FaBoxOpen style={{ color: "#fbbf24" }} />,
  Cancelled: <FaTimesCircle style={{ color: "#ef4444" }} />,
};

const Orders = () => {
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
        Admin Orders
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
                Order ID
              </th>
              <th style={{ padding: "1rem", textAlign: "left" }}>
                <FaUser /> Customer
              </th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Total</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Date</th>
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
            {ordersData.map((order) => (
              <tr
                key={order.id}
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
                  }}
                >
                  {order.id}
                </td>
                <td style={{ padding: "1rem" }}>{order.customer}</td>
                <td style={{ padding: "1rem" }}>{order.total}</td>
                <td style={{ padding: "1rem" }}>{order.date}</td>
                <td
                  style={{
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {statusIcon[order.status]}{" "}
                  <span style={{ fontWeight: "500" }}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
