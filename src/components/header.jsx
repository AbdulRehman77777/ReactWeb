import React, { useState } from 'react';
import { useUser } from './usercontext';
import { Link } from 'react-router-dom';
import { User, Menu, X, LogOut } from 'lucide-react';

const Header = () => {
  const { user, logoutUser } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="header-container">
      <div className="header-content">
        <h2 className="logo">React App</h2>
        
        {/* Mobile Toggle Button */}
        <button className="mobile-btn" onClick={toggleMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation & User Info */}
        <div className={`nav-items ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="links">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
            <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>Profile</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/files" onClick={() => setIsMobileMenuOpen(false)}>Files</Link>
          </div>

          <div className="user-section">
            <div className="user-text">
              <span className="name">{user?.name}</span>
              <span className="email">{user?.email}</span>
            </div>
            <div className="avatar">
              <User size={20} />
            </div>
            <button onClick={logoutUser} className="logout-btn" title="Logout">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;