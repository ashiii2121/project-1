import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaTrash, FaStar } from "react-icons/fa";
import "./Wishlist.css";

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Fresh Organic Carrots",
            category: "Vegetables",
            price: 60,
            originalPrice: 80,
            rating: 4.5,
            reviews: 128,
            image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
            inStock: true,
            discount: 25,
        },
        {
            id: 2,
            name: "Premium Red Apples",
            category: "Fruits",
            price: 199,
            originalPrice: 249,
            rating: 4.8,
            reviews: 256,
            image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
            inStock: true,
            discount: 20,
        },
        {
            id: 3,
            name: "Fresh Chicken Wings",
            category: "Meat",
            price: 140,
            originalPrice: 180,
            rating: 4.6,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=400&fit=crop",
            inStock: true,
            discount: 22,
        },
        {
            id: 4,
            name: "Organic Broccoli",
            category: "Vegetables",
            price: 80,
            originalPrice: 100,
            rating: 4.3,
            reviews: 67,
            image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop",
            inStock: true,
            discount: 20,
        },
        {
            id: 5,
            name: "Fresh Bananas",
            category: "Fruits",
            price: 50,
            originalPrice: 65,
            rating: 4.7,
            reviews: 342,
            image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
            inStock: false,
            discount: 23,
        },
        {
            id: 6,
            name: "Atlantic Salmon Fillet",
            category: "Seafood",
            price: 350,
            originalPrice: 450,
            rating: 4.9,
            reviews: 178,
            image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=400&fit=crop",
            inStock: true,
            discount: 22,
        },
    ]);

    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    };

    const addToCart = (item) => {
        alert(`${item.name} added to cart!`);
    };

    const moveAllToCart = () => {
        const inStockItems = wishlistItems.filter((item) => item.inStock);
        if (inStockItems.length > 0) {
            alert(`${inStockItems.length} items added to cart!`);
        }
    };

    const clearWishlist = () => {
        if (window.confirm("Are you sure you want to clear your wishlist?")) {
            setWishlistItems([]);
        }
    };

    return (
        <div className="wishlist-container">
            {/* Header Section */}
            <div className="wishlist-header">
                <div className="header-content">
                    <div className="header-icon">
                        <FaHeart />
                    </div>
                    <div>
                        <h1>My Wishlist</h1>
                        <p>{wishlistItems.length} items saved for later</p>
                    </div>
                </div>
                {wishlistItems.length > 0 && (
                    <div className="header-actions">
                        <button className="btn-move-all" onClick={moveAllToCart}>
                            <FaShoppingCart /> Move All to Cart
                        </button>
                        <button className="btn-clear" onClick={clearWishlist}>
                            <FaTrash /> Clear Wishlist
                        </button>
                    </div>
                )}
            </div>

            {/* Wishlist Items */}
            {wishlistItems.length === 0 ? (
                <div className="empty-wishlist">
                    <div className="empty-icon">
                        <FaHeart />
                    </div>
                    <h2>Your Wishlist is Empty</h2>
                    <p>Start adding items you love to your wishlist!</p>
                    <a href="/category" className="btn-browse">
                        Browse Products
                    </a>
                </div>
            ) : (
                <div className="wishlist-grid">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="wishlist-card">
                            {/* Discount Badge */}
                            {item.discount > 0 && (
                                <div className="discount-badge">{item.discount}% OFF</div>
                            )}

                            {/* Stock Status */}
                            {!item.inStock && (
                                <div className="stock-badge out-of-stock">Out of Stock</div>
                            )}

                            {/* Remove Button */}
                            <button
                                className="remove-btn"
                                onClick={() => removeFromWishlist(item.id)}
                            >
                                <FaTrash />
                            </button>

                            {/* Product Image */}
                            <div className="product-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            {/* Product Details */}
                            <div className="product-details">
                                <span className="category">{item.category}</span>
                                <h3 className="product-name">{item.name}</h3>

                                {/* Rating */}
                                <div className="rating">
                                    <div className="stars">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className={index < Math.floor(item.rating) ? "filled" : ""}
                                            />
                                        ))}
                                    </div>
                                    <span className="rating-text">
                                        {item.rating} ({item.reviews} reviews)
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="price-section">
                                    <div className="current-price">₹{item.price}</div>
                                    <div className="original-price">₹{item.originalPrice}</div>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    className={`add-to-cart-btn ${!item.inStock ? "disabled" : ""}`}
                                    onClick={() => item.inStock && addToCart(item)}
                                    disabled={!item.inStock}
                                >
                                    <FaShoppingCart />
                                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Summary Section */}
            {wishlistItems.length > 0 && (
                <div className="wishlist-summary">
                    <div className="summary-card">
                        <h3>Wishlist Summary</h3>
                        <div className="summary-row">
                            <span>Total Items:</span>
                            <span className="value">{wishlistItems.length}</span>
                        </div>
                        <div className="summary-row">
                            <span>In Stock:</span>
                            <span className="value success">
                                {wishlistItems.filter((item) => item.inStock).length}
                            </span>
                        </div>
                        <div className="summary-row">
                            <span>Out of Stock:</span>
                            <span className="value danger">
                                {wishlistItems.filter((item) => !item.inStock).length}
                            </span>
                        </div>
                        <div className="summary-row total">
                            <span>Total Value:</span>
                            <span className="value">
                                ₹
                                {wishlistItems
                                    .reduce((sum, item) => sum + item.price, 0)
                                    .toFixed(2)}
                            </span>
                        </div>
                        <div className="summary-row savings">
                            <span>Total Savings:</span>
                            <span className="value success">
                                ₹
                                {wishlistItems
                                    .reduce((sum, item) => sum + (item.originalPrice - item.price), 0)
                                    .toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
