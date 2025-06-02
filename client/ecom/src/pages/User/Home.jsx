import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Fresh Carrots",
    category: "Vegetables",
    price: 60,
    image: "/images/carrot.webp",
  },
  {
    id: 2,
    name: "Red Apples",
    category: "Fruits",
    price: 199,
    image: "/images/apple.png",
  },
  {
    id: 3,
    name: "Chicken Wings",
    category: "Meat",
    price: 140,
    image: "/images/chickenwings.jpg",
  },

  {
    id: 4,
    name: "Cucumber",
    category: "Vegtables",
    price: 70,
    image: "/images/cucumber.jpg",
  },
  {
    id: 5,
    name: "Beef Steak",
    category: "Meat",
    price: 500,
    image: "/images/beefsteak.jpg",
  },

  {
    id: 6,
    name: "Mutton Chops",
    category: "Meat",
    price: 800,
    image: "/images/muttonchops.jpg",
  },
  {
    id: 7,
    name: "Grape",
    category: "fruits",
    price: 100,
    image: "/images/grape.jpg",
  },
  {
    id: 8,
    name: "Spinach",
    category: "vegtable",
    price: 40,
    image: "/images/pinach.webp",
  },
  {
    id: 9,
    name: "Papaya",
    category: "fruits",
    price: 45,
    image: "/images/papaya.jpg",
  },
  {
    id: 10,
    name: "Beef Ribs",
    category: "Meat",
    price: 600,
    image: "/images/ribs.jpg",
  },

  {
    id: 11,
    name: "Mango",
    category: "fruits",
    price: 100,
    image: "/images/mango.jpg",
  },
  {
    id: 12,
    name: "Onion",
    category: "fruits",
    price: 80,
    image: "/images/onion.webp",
  },
];

function Hero({ addToCart }) {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Fresh & Organic</h1>
        <p>Vegetables, Fruits & Meat Delivered to Your Door</p>
        <button className="hero-btn">Shop Now</button>
      </div>

      <div className="hero-products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p className="price">₹{product.price.toFixed(2)}</p>
            <button
              className="add-btn"
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
