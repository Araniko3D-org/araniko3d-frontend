import React, { useState } from "react";
import Buttons from "../components/Buttons/Button";
import Logo from "../Scenes/images/Logo.png";
import "./styles.css";

const Header = ({ color }) => {
  const navbar = `navbar${color ? ` color-${color}` : ""}`;
  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(sectionId);
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
          <li>
            <a
              onClick={() => scrollToSection("scene")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("documented-areas")}
            >
              Documented Areas
            </a>
          </li>
          {/* <li>
            <a
              href="/#works"
              onClick={() => scrollToSection("works")}
              className={activeLink === "works" ? "active" : ""}
            >
              Works
            </a>
          </li> */}
          <li>
            <a
              onClick={() => scrollToSection("how_it_works")}
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("team")}

            >
              Our Team
            </a>
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
