import React from "react";
import { FaBoxes, FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";

const inventoryData = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro",
    category: "Electronics",
    stock: 25,
    price: "$999",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Headphones",
    category: "Audio",
    stock: 40,
    price: "$349",
  },
  {
    id: 3,
    name: "Nike Air Max 270",
    category: "Footwear",
    stock: 60,
    price: "$150",
  },
];

const Inventory = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(102,126,234,0.15)",
          padding: "32px 40px",
          marginBottom: "32px",
          width: "100%",
          maxWidth: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaBoxes size={36} style={{ marginRight: "16px" }} />
          <h2 style={{ fontWeight: 700, fontSize: "2rem", margin: 0 }}>
            Admin Inventory
          </h2>
        </div>
        <button
          style={{
            background: "#fff",
            color: "#764ba2",
            border: "none",
            borderRadius: "50%",
            padding: "10px 12px",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(102,126,234,0.10)",
            transition: "background 0.2s",
          }}
          title="Add New Item"
        >
          <FaPlusCircle size={24} />
        </button>
      </div>
      <div style={{ width: "100%", maxWidth: "700px" }}>
        <table
          style={{
            width: "100%",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 12px rgba(102,126,234,0.10)",
            overflow: "hidden",
          }}
        >
          <thead style={{ background: "#667eea", color: "#fff" }}>
            <tr>
              <th style={{ padding: "16px", textAlign: "left" }}>Product</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Category</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Stock</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Price</th>
              <th style={{ padding: "16px", textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "16px" }}>{item.name}</td>
                <td style={{ padding: "16px" }}>{item.category}</td>
                <td style={{ padding: "16px" }}>{item.stock}</td>
                <td style={{ padding: "16px" }}>{item.price}</td>
                <td style={{ padding: "16px", textAlign: "center" }}>
                  <button
                    style={{
                      background: "#667eea",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "6px 10px",
                      marginRight: "8px",
                      cursor: "pointer",
                      boxShadow: "0 1px 4px rgba(102,126,234,0.10)",
                      transition: "background 0.2s",
                    }}
                    title="Edit"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    style={{
                      background: "#ff6b6b",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "6px 10px",
                      cursor: "pointer",
                      boxShadow: "0 1px 4px rgba(255,107,107,0.10)",
                      transition: "background 0.2s",
                    }}
                    title="Delete"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
