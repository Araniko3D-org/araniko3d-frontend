import React from "react";
import Logo from "../Scenes/images/Logo.png";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="second-navbar">
        <ul className="nav-links">
          <li>
            <div className="nav-logo">
              <Link to="/">
                <img src={Logo} alt="logo" className="logo" />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
