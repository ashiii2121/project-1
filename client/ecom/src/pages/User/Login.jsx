import React, { useState } from 'react';
import './Login.css';

const LoginForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOTP = async (e) => {
    e.preventDefault();
    // TODO: Implement API call to send OTP to the provided email
    setStep(2);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    // TODO: Implement API call to verify the entered OTP
    alert('Login successful!');
  };

  return (
    <div className="login-container">
      {step === 1 ? (
        <form onSubmit={handleSendOTP} className="login-form">
          <h2>Email Login</h2>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP} className="login-form">
          <h2>Enter OTP</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
