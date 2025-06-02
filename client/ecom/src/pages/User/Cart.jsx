import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from '../Context/Cartcontext';
import './Cart.css';

function CartPage() {
  const { cartItems } = useCart();
  const navigate = useNavigate(); // Hook for navigation

  const getTotal = () =>
    cartItems.reduce((total, item) => {
      const numericPrice = parseInt(item.price.replace(/\D/g, '')) || 0;
      return total + numericPrice * item.quantity;
    }, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
    } else {
      navigate('/checkout'); // Navigate to Checkout page
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ₹{getTotal()}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
