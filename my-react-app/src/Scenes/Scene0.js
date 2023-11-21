// Scene.js
import React, { useState, useEffect } from "react";
import "./Scene0.css";
// import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
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
  const [scrollDisabled, setScrollDisabled] = useState(true);

  useEffect(() => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const animateElements = async () => {
      // Disable scrolling initially
      setScrollDisabled(true);

      // Initial state: land, hill, temple, wave, stars, and slightly blurry forest
      document.querySelector(".land").style.opacity = 1;
      document.querySelector(".hill").style.opacity = 1;
      document.querySelector(".temple").style.opacity = 1;
      document.querySelector(".wave").style.opacity = 1;
      document.querySelector(".star").style.opacity = 1;
      document.querySelector(".forest").style.opacity = 0.8; // Initial opacity
      document.querySelector(".forest").style.filter = "blur(5px)"; // Initial blur

      // Hide  initially
      document.querySelector(".sun").style.opacity = 0;
      document.querySelector(".embark").style.opacity = 0;
      document.querySelector(".ex-nepal").style.opacity = 0;
      document.querySelector(".get-started").style.opacity = 0;
      document.querySelector(".scroll-button").style.opacity = 0;

      // Display sun after a delay
      await delay(1000); 
      document.querySelector(".sun").style.opacity = 1;

      // Stars gradually fade out
      document.querySelector(".star").style.transition = "opacity 3000ms ease-in-out";
      document.querySelector(".star").style.opacity = 0;

      // Forest gradually becomes clear
      document.querySelector(".forest").style.transition = "opacity 3000ms ease-in-out, filter 2000ms ease-in-out";
      document.querySelector(".forest").style.opacity = 1;
      document.querySelector(".forest").style.filter = "none";

      // Display text "Araniko 3D"
      await delay(3500); 
      document.querySelector(".ex-nepal").style.opacity = 1;

      await delay(4000); 
      document.querySelector(".embark").style.opacity = 1;

      await delay(4500); 
      document.querySelector(".get-started").style.opacity = 1;

      await delay(5000); 
      document.querySelector(".scroll-button").style.opacity = 1;
      // Enable scrolling
      await delay(5500); 
      setScrollDisabled(false);
    };

    animateElements();
  }, []);

  const handleScrollDown = () => {
    // Scroll down to a specific Y coordinate. You can adjust the value as needed.
    window.scrollTo({
      top: 800,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <div
      id="scene"
      className="scene"
      style={{ overflowY: scrollDisabled ? "hidden" : "auto" }}
    >
      <div className="background-image">{/* Static Background */}</div>
      <img src={star} alt="Star" className="star" />
      <img src={sun} alt="Sun" className="sun" />
      <img src={Land} alt="Land" className="land" />
      <img src={Temple} alt="Temple" className="temple" />
      <img src={hillImage} alt="hill" className="hill" />
      <img src={Wave} alt="wave" className="wave" />
      <img src={forestImage} alt="forest1" className="forest" />
      <div className="explore-nepal">
        <h2 className="ex-nepal">
          Araniko 3D
        </h2>
        <h1 className="embark">
          Cultural Resilience Through Digital Preservation
        </h1>

        <div className="get-started">
          {/* <Link to="/map"> */}
            <Buttons
              mode="hover"
              size="medium"
              className="get-started-button"
            >
              Book Now
            </Buttons>
          {/* </Link> */}
          <button className="scroll-button" onClick={handleScrollDown}>
            <FontAwesomeIcon icon={faAngleDown} size="4x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scene;
