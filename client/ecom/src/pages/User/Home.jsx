import React, { useEffect, useRef } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Fresh Carrots",
    category: "Vegetables",
    price: 60,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Red Apples",
    category: "Fruits",
    price: 199,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Chicken Wings",
    category: "Meat",
    price: 140,
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Broccoli",
    category: "Vegetables",
    price: 80,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Bananas",
    category: "Fruits",
    price: 50,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Salmon Fillet",
    category: "Meat",
    price: 350,
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Tomatoes",
    category: "Vegetables",
    price: 70,
    image: "https://images.unsplash.com/photo-1546470427-227e9c4d6e6c?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Green Grapes",
    category: "Fruits",
    price: 120,
    image: "https://images.unsplash.com/photo-1599819177626-c0d3a6fd1d4b?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    name: "Eggs",
    category: "Meat",
    price: 90,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
  },
  {
    id: 10,
    name: "Spinach",
    category: "Vegetables",
    price: 40,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
  },
  {
    id: 11,
    name: "Mango",
    category: "Fruits",
    price: 100,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
  },
  {
    id: 12,
    name: "Beef Steak",
    category: "Meat",
    price: 500,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=400&fit=crop",
  },
  {
    id: 13,
    name: "Cucumber",
    category: "Vegetables",
    price: 70,
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400&h=400&fit=crop",
  },
  {
    id: 14,
    name: "Papaya",
    category: "Fruits",
    price: 45,
    image: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&h=400&fit=crop",
  },
  {
    id: 15,
    name: "Mutton Chops",
    category: "Meat",
    price: 800,
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop",
  },
];

function Hero({ addToCart }) {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.style.opacity = 0;
      hero.style.transform = "translateY(40px)";
      setTimeout(() => {
        hero.style.transition =
          "opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)";
        hero.style.opacity = 1;
        hero.style.transform = "translateY(0)";
      }, 200);
    }
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <section className="hero">
      <div
        ref={heroRef}
        className="hero-section"
        style={{
          background: "linear-gradient(90deg, #f8ffae 0%, #43c6ac 100%)",
          borderRadius: "20px",
          padding: "48px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 6px 24px rgba(67,198,172,0.15)",
          marginBottom: "40px",
        }}
      >
        <div style={{ maxWidth: "520px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#222",
              marginBottom: "18px",
              letterSpacing: "1px",
            }}
          >
            Welcome to Shopeasy
          </h1>
          <p
            style={{ fontSize: "1.25rem", color: "#444", marginBottom: "28px" }}
          >
            Discover fresh groceries, daily essentials, and exclusive deals.
            Shop smarter, live better!
          </p>
          <a
            href="/category"
            style={{
              background: "#43c6ac",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: "30px",
              fontWeight: "600",
              fontSize: "1.1rem",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(67,198,172,0.15)",
              transition: "background 0.3s",
            }}
          >
            Shop Now
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
          alt="Fresh groceries"
          style={{
            width: "340px",
            borderRadius: "20px",
            boxShadow: "0 4px 24px rgba(67,198,172,0.18)",
          }}
        />
      </div>
      <div
        className="hero-products"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
          marginTop: "32px",
        }}
      >
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 4px 24px rgba(67,198,172,0.10)",
              padding: "24px 18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{
                width: "110px",
                height: "110px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 2px 12px rgba(67,198,172,0.13)",
                marginBottom: "18px",
                border: "4px solid #43c6ac",
              }}
            />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#222",
                marginBottom: "8px",
              }}
            >
              {product.name}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#43c6ac",
                marginBottom: "6px",
                fontWeight: "500",
              }}
            >
              {product.category}
            </p>
            <p
              className="price"
              style={{
                fontSize: "1.1rem",
                color: "#444",
                marginBottom: "12px",
                fontWeight: "600",
              }}
            >
              ₹{product.price.toFixed(2)}
            </p>
            <button
              className="add-btn"
              style={{
                background: "linear-gradient(90deg, #43c6ac 0%, #f8ffae 100%)",
                color: "#222",
                padding: "10px 28px",
                borderRadius: "24px",
                fontWeight: "600",
                fontSize: "1rem",
                border: "none",
                boxShadow: "0 2px 8px rgba(67,198,172,0.10)",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #f8ffae 0%, #43c6ac 100%)")
              }
              onMouseOut={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #43c6ac 0%, #f8ffae 100%)")
              }
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
