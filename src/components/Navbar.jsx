import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🌿 KrishiConnect</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/prices">Market Prices</Link>
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/subsidies">Subsidies</Link>
        <Link to="/diseases">Diseases</Link>
        {user ? (
          <>
            <span style={{ color: 'white', fontWeight: 'bold' }}>Hi, {user.name}</span>
            <button onClick={handleLogout} className="nav-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="nav-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
