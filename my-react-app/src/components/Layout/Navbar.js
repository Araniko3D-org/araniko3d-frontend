import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '../Buttons/Button';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <div className="logo">
            <img src="your-logo.png" alt="Logo" />
          </div>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>

          <div className="button">
            <Button mode="hover" size="large">Schedule a demo</Button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
