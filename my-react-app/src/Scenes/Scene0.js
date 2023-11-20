import React from "react";
import "./Scene0.css";
import star from "./images/stars.png";
import sun from "./images/circle.png";
import forestImage from "./images/forest.png";
import Land from "./images/land.png";
import Temple from "./images/temple.png";
import hillImage from "./images/hill.png";
import Buttons from "../components/Buttons/Button";
import Wave from "./images/wave.png";

import { Link } from "react-router-dom";

const Scene = () => {
  const handleScrollDown = () => {
    // Scroll down to a specific Y coordinate. You can adjust the value as needed.
    window.scrollTo({
      top: 800,
      behavior: "smooth", // for smooth scrolling
    });
  };
  return (
    <div id="scene" className="scene">
      <div className="background-image">{/* Static Background */}</div>
      <img src={star} alt="Star" className="star" />
      <img src={sun} alt="Sun" className="sun" />
      <img src={Land} alt="Land" className="land" />
      <img src={Temple} alt="Temple" className="temple" />
      <img src={forestImage} alt="forest1" className="forest" />
      <img src={hillImage} alt="hill" className="hill" />
      <img src={Wave} alt="wave" className="wave" />
      <div className="explore-nepal">
        <h2 className="ex-nepal">Araniko 3D</h2>
        <h1 className="embark">
          Cultural Resilience Through Digital Preservation
        </h1>

        <div className="get-started">
          <Link to="/map">
            <Buttons mode="hover" size="medium" className="get-started-button">
              Get Started
            </Buttons>
          </Link>
          <button className="embark" onClick={handleScrollDown}>
            ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scene;
