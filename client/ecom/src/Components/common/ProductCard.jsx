import React, { useState } from "react";
import { 
  FaShoppingCart, 
  FaHeart, 
  FaEye, 
  FaStar, 
  FaStarHalfAlt,
  FaRegStar,
  FaTag,
  FaFire
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onAddToWishlist, 
  variant = "default",
  showQuickView = true,
  showWishlist = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star filled" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star empty" />);
    }
    return stars;
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    navigate(`/productdetail/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart && onAddToCart(product);
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    onAddToWishlist && onAddToWishlist(product);
  };

  const handleCardClick = () => {
    navigate(`/productdetail/${product.id}`);
  };

  return (
    <div 
      className={`product-card ${variant} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Product Badge */}
      {product.badge && (
        <div className={`product-badge ${product.badge.type}`}>
          {product.badge.type === 'hot' && <FaFire />}
          {product.badge.type === 'sale' && <FaTag />}
          <span>{product.badge.text}</span>
        </div>
      )}

      {/* Wishlist Button */}
      {showWishlist && (
        <button 
          className="wishlist-btn"
          onClick={handleAddToWishlist}
          title="Add to Wishlist"
        >
          <FaHeart />
        </button>
      )}

      {/* Product Image */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className={`product-image ${isImageLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* Hover Overlay */}
        <div className="product-overlay">
          <div className="overlay-actions">
            {showQuickView && (
              <button 
                className="overlay-btn quick-view"
                onClick={handleQuickView}
                title="Quick View"
              >
                <FaEye />
              </button>
            )}
            <button 
              className="overlay-btn add-to-cart"
              onClick={handleAddToCart}
              title="Add to Cart"
            >
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        {product.category && (
          <span className="product-category">{product.category}</span>
        )}
        
        <h3 className="product-name">{product.name}</h3>
        
        {product.description && variant === "detailed" && (
          <p className="product-description">{product.description}</p>
        )}

        {/* Rating */}
        {product.rating && (
          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-text">({product.reviewCount || 0})</span>
          </div>
        )}

        {/* Price */}
        <div className="product-price">
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
          <span className="current-price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="discount">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Stock Status */}
        {product.stock !== undefined && (
          <div className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </div>
        )}

        {/* Action Buttons */}
        <div className="product-actions">
          <button 
            className="btn-primary add-cart-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
