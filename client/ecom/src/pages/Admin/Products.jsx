import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaBoxOpen,
  FaTags,
  FaRupeeSign,
  FaImage,
  FaPlus,
} from "react-icons/fa";

export default function Productdetails() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    imageFile: null,
    imageUrl: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageFile") {
      setForm({ ...form, imageFile: files[0], imageUrl: "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleAddOrUpdate = () => {
    if (!form.name || !form.description || !form.category || !form.price)
      return;
    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = form;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, form]);
    }
    setForm({
      name: "",
      description: "",
      category: "",
      price: "",
      imageFile: null,
      imageUrl: "",
    });
  };

  const handleEdit = (index) => {
    setForm(products[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
    if (editIndex === index) {
      setForm({
        name: "",
        description: "",
        category: "",
        price: "",
        imageFile: null,
        imageUrl: "",
      });
      setEditIndex(null);
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "32px",
        fontFamily: "Segoe UI",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#007BFF",
          marginBottom: "32px",
          fontWeight: 700,
          fontSize: "2rem",
        }}
      >
        <FaBoxOpen style={{ marginRight: "12px" }} /> Product Manager
      </h2>
      <div
        style={{
          background: "linear-gradient(90deg,#e0eafc,#cfdef3)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(67,198,172,0.10)",
          padding: "32px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "24px",
          }}
        >
          <div>
            <label style={{ fontWeight: 600, color: "#333" }}>
              <FaTags style={{ marginRight: "8px" }} /> Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={form.name}
              onChange={handleChange}
              style={{
                width: "100%",
                marginBottom: "16px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #bdbdbd",
              }}
            />
            <label style={{ fontWeight: 600, color: "#333" }}>
              <FaTags style={{ marginRight: "8px" }} /> Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Product Description"
              value={form.description}
              onChange={handleChange}
              style={{
                width: "100%",
                marginBottom: "16px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #bdbdbd",
              }}
            />
            <label style={{ fontWeight: 600, color: "#333" }}>
              <FaTags style={{ marginRight: "8px" }} /> Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              style={{
                width: "100%",
                marginBottom: "16px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #bdbdbd",
              }}
            >
              <option value="">Select Category</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Meat">Meat</option>
            </select>
            <label style={{ fontWeight: 600, color: "#333" }}>
              <FaRupeeSign style={{ marginRight: "8px" }} /> Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              style={{
                width: "100%",
                marginBottom: "16px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #bdbdbd",
              }}
            />
          </div>
          <div>
            <label style={{ fontWeight: 600, color: "#333" }}>
              <FaImage style={{ marginRight: "8px" }} /> Image Upload
            </label>
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={handleChange}
              style={{
                width: "100%",
                marginBottom: "16px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #bdbdbd",
              }}
            />
            <label style={{ fontWeight: 600, color: "#333" }}>
              <FaImage style={{ marginRight: "8px" }} /> Or paste image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Or paste image URL"
              value={form.imageUrl}
              onChange={handleChange}
              style={{
                width: "100%",
                marginBottom: "16px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #bdbdbd",
              }}
            />
            <button
              onClick={handleAddOrUpdate}
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(90deg,#007BFF,#00C6FF)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,123,255,0.10)",
              }}
            >
              {editIndex !== null ? (
                <>
                  <FaEdit style={{ marginRight: "8px" }} /> Update
                </>
              ) : (
                <>
                  <FaPlus style={{ marginRight: "8px" }} /> Add
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        {products.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888", fontSize: "1.1rem" }}>
            No products yet.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "24px",
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {(product.imageUrl || product.imageFile) && (
                  <img
                    src={
                      product.imageUrl
                        ? product.imageUrl
                        : URL.createObjectURL(product.imageFile)
                    }
                    alt="Product"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "16px",
                      boxShadow: "0 2px 8px rgba(0,123,255,0.10)",
                    }}
                  />
                )}
                <h3
                  style={{
                    fontWeight: 700,
                    color: "#007BFF",
                    marginBottom: "8px",
                  }}
                >
                  {product.name}
                </h3>
                <p style={{ color: "#555", marginBottom: "8px" }}>
                  {product.description}
                </p>
                <span
                  style={{
                    background: "#e3f2fd",
                    color: "#007BFF",
                    padding: "4px 12px",
                    borderRadius: "8px",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  {product.category}
                </span>
                <span
                  style={{
                    color: "#e91e63",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: "12px",
                  }}
                >
                  <FaRupeeSign style={{ marginRight: "4px" }} />
                  {product.price}
                </span>
                <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                  <button
                    onClick={() => handleEdit(index)}
                    style={{
                      background: "#fff",
                      border: "1px solid #007BFF",
                      color: "#007BFF",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "0.2s",
                    }}
                  >
                    <FaEdit style={{ marginRight: "6px" }} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      background: "#fff",
                      border: "1px solid #e91e63",
                      color: "#e91e63",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "0.2s",
                    }}
                  >
                    <FaTrash style={{ marginRight: "6px" }} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
