import React from "react";
import Buttons from "../components/Buttons/Button";
import Logo from "../Scenes/images/Logo.png";
import "./styles.css";

const Header = ({ color }) => {
  const navbar = `navbar${color ? ` color-${color}` : ""}`;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // setActiveLink(sectionId);
    }
  };

  return (
    <header>
      <nav className={navbar}>
        <ul className="nav-links">
          <li>
            <div className="nav-logo">
              <img src={Logo} alt="logo" className="logo" />
            </div>
          </li>
          <li onClick={() => scrollToSection("scene")}>
              Home
          </li>
          <li  onClick={() => scrollToSection("about")}>
           
              About
          </li>
          <li onClick={() => scrollToSection("documented-areas")}>
           
              Documented Areas
          </li>

          <li onClick={() => scrollToSection("how_it_works")}>
            
              How It Works
          </li>
          <li onClick={() => scrollToSection("team")}>
              Our Team
          </li>
          <li>
            <div className="button">
              <Buttons mode="hover" size="large">
                Demo
              </Buttons>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
