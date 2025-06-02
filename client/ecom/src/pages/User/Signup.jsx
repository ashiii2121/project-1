import React, { useState } from 'react';
import './Signup.css';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    otp: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    alert('Signup successful!');
  };

  return (
    <div className="signup-container">
      {step === 1 ? (
        <form onSubmit={handleSendOTP} className="signup-form">
          <h2>Sign Up</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP} className="signup-form">
          <h2>Verify OTP</h2>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={handleChange}
            required
          />
          <button type="submit">Verify</button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
