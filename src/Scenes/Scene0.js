import React, { useState, useEffect } from "react";
import "./Scene0.css";
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

    const setElementStyle = (selector, style, value) => {
      const element = document.querySelector(selector);
      if (element) {
        element.style[style] = value;
      } else {
        console.error(`Element with selector "${selector}" not found`);
      }
    };

    const runAnimation = async () => {
      setScrollDisabled(true);

      const landElement = document.querySelector(".land");
      if (landElement) {
        setElementStyle(".land", "opacity", 1);
        setElementStyle(".hill", "opacity", 1);
        setElementStyle(".temple", "opacity", 1);
        setElementStyle(".wave", "opacity", 1);
        setElementStyle(".star", "opacity", 1);
        setElementStyle(".forest", "opacity", 0.8);
        setElementStyle(".forest", "filter", "blur(5px)");

        setElementStyle(".sun", "opacity", 0);
        setElementStyle(".embark", "opacity", 0);
        setElementStyle(".ex-nepal", "opacity", 0);
        setElementStyle(".get-started", "opacity", 0);
        setElementStyle(".scroll-button", "opacity", 0);

        await delay(1000);
        setElementStyle(".sun", "opacity", 1);

        setElementStyle(".star", "transition", "opacity 3000ms ease-in-out");
        setElementStyle(".star", "opacity", 0);

        setElementStyle(".forest", "transition", "opacity 3000ms ease-in-out, filter 2000ms ease-in-out");
        setElementStyle(".forest", "opacity", 1);
        setElementStyle(".forest", "filter", "none");

        await delay(3500);
        setElementStyle(".ex-nepal", "opacity", 1);

        await delay(3550);
        setElementStyle(".embark", "opacity", 1);

        await delay(3600);
        setElementStyle(".get-started", "opacity", 1);

        await delay(3650);
        setElementStyle(".scroll-button", "opacity", 1);

        await delay(3700);
        setScrollDisabled(false);
      } else {
        console.error("Land element not found");
      }
    };

    document.addEventListener("DOMContentLoaded", runAnimation);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
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
        <h2 className="ex-nepal">Araniko 3D</h2>
        <h1 className="embark">Cultural Resilience Through Digital Preservation</h1>

        <div className="get-started">
          <Link to='/map'>
          <Buttons mode="hover" size="medium" className="get-started-button">
            Explore Now
          </Buttons>
          </Link>
          <button className="scroll-button" onClick={handleScrollDown}>
            <FontAwesomeIcon icon={faAngleDown} size="4x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scene;
