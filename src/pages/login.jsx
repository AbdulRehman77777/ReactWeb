import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../components/usercontext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // REQUIREMENT: USE AXIOS
      // We simulate fetching data from a dummy API
      await axios.get(
  'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1'
);


      // Simulate a small delay for better UX
      setTimeout(() => {
        // Save user to Context
        loginUser({ name: formData.name, email: formData.email });
        // Go to Dashboard
        navigate('/');
      }, 1000);

    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };

  return (
    <div className="page-center">
      <div className="card login-card">
        <h3>React App</h3>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="text" name="name" placeholder="Full Name" required 
            onChange={handleChange} 
          />
          <input 
            type="email" name="email" placeholder="Email" required 
            onChange={handleChange} 
          />
          <input 
            type="password" name="password" placeholder="Password" required 
            onChange={handleChange} 
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Login'}
          </button>
        </form>
        <p style={{color: '#2196f3', fontSize: '12px', marginTop: '10px', cursor:'pointer'}}>Forgot Password?</p>
      </div>
    </div>
  );
};

export default Login;