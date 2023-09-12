import React from 'react';
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

            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Blogs</a></li>

            <div className="button">
            <Button mode="hover" size="large" >Schedule a demo</Button>
           </div>
        </ul>
        
      </nav>
    </header>
  );
};

export default Navbar;
