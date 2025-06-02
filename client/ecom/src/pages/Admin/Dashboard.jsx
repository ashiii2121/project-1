import React, { useState } from "react";

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
      setForm({ ...form, imageFile: files[0], imageUrl: "" }); // Clear URL if file is chosen
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
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h2>Product Manager</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />
        <input
          type="text"
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        >
          <option value="">Select Category</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />
        {/* Image Upload */}
        <input
          type="file"
          name="imageFile"
          accept="image/*"
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />
        {/* Image URL */}
        <input
          type="text"
          name="imageUrl"
          placeholder="Or paste image URL"
          value={form.imageUrl}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />
        <button
          onClick={handleAddOrUpdate}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <div>
        {products.length === 0 ? (
          <p>No products yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {products.map((product, index) => (
              <li
                key={index}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong>{product.name}</strong>
                  <p>{product.description}</p>
                  <small>
                    {product.category} — ₹{product.price}
                  </small>
                  {product.imageUrl || product.imageFile ? (
                    <div style={{ marginTop: "8px" }}>
                      <img
                        src={
                          product.imageUrl
                            ? product.imageUrl
                            : URL.createObjectURL(product.imageFile)
                        }
                        alt="Product"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "6px",
                          marginTop: "6px",
                        }}
                      />
                    </div>
                  ) : null}
                </div>
                <div>
                  <button
                    onClick={() => handleEdit(index)}
                    style={{
                      marginRight: "10px",
                      padding: "4px 8px",
                      backgroundColor: "#ffc107",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
