import React from "react";
import "./ProductDetail.css";
import { FaCartPlus, FaBolt } from "react-icons/fa";

const productData = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro",
    price: 129999,
    description:
      "Experience the next level of smartphone technology with the iPhone 14 Pro. Stunning display, powerful camera, and blazing fast performance.",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Headphones",
    price: 29999,
    description:
      "Industry-leading noise cancellation headphones with premium sound quality and all-day comfort.",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  },
];

const ProductDetail = () => {
  return (
    <div className="product-list">
      {productData.map((product) => (
        <div className="product-detail" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-price">₹{product.price.toLocaleString()}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-rating">⭐ {product.rating}</p>
            <div className="buttons">
              <button className="btn add-to-cart">
                <FaCartPlus style={{ marginRight: "8px" }} />
                Add to Cart
              </button>
              <button className="btn buy-now">
                <FaBolt style={{ marginRight: "8px" }} />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
