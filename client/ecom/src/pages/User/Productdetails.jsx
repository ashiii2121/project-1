import React from 'react';
import './ProductDetail.css';

const productData = [
  {
  },
  {
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
              <button className="btn add-to-cart">Add to Cart</button>
              <button className="btn buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
