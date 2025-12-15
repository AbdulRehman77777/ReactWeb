import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './usercontext';

const Header = () => {
  const { user, logout } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // 1. Clear user from state & localstorage
    navigate('/login'); // 2. Force redirect to login page
  };

  return (
    <div className="header-container">
      <div className="header-content">
        {/* Logo */}
        <h1 className="logo">Dashboard App</h1>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation & User Section */}
        <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
          
          <div className="links">
            {/* Click closes menu on mobile */}
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
            <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
            <Link to="/files" onClick={() => setIsMenuOpen(false)}>Files</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </div>

          <div className="user-section">
            <div className="user-text">
              <span className="name">{user?.name || 'User'}</span>
              <span className="email">{user?.email || ''}</span>
            </div>
            
            <div className="avatar">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>

            {/* THE LOGOUT BUTTON */}
            <button 
              className="logout-btn" 
              onClick={handleLogout}
              title="Sign Out"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;