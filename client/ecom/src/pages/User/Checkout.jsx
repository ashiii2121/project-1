import React from 'react';
import './Checkout.css';

function CheckoutPage() {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Shipping Address</label>
          <textarea placeholder="Enter your address" rows="3" required></textarea>
        </div>

        <div className="form-group">
          <label>Card Details</label>
          <input type="text" placeholder="Card Number" required />
          <div className="card-details">
            <input type="text" placeholder="MM/YY" required />
            <input type="text" placeholder="CVV" required />
          </div>
        </div>

        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
