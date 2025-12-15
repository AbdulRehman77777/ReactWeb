import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/usercontext';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate simple logic
    if (name && email && password) {
      // Pass the object to our new login function
      login({ name, email });
      navigate('/');
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="page-center">
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;