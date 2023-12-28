import React from "react";
import topImage from "./images/topfooter.png";
import bottomImage from "./images/bottomfooter.png";
import "./styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const topImageStyle = {
    backgroundImage: `url(${topImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "150%",
    height: "100px",
  };

  const bottomImageStyle = {
    backgroundImage: `url(${bottomImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "250px",
  };

  return (
    <div className="footer">
      <div className="footer-mask">
        <div class="footer-upper">
          <div class="footer-text">
            <h3>Schedule a Demo</h3>
            <p>Experience the immense real-time beauty of heritage of Nepal</p>
            <a href="/readmore">Read More</a>
          </div>
        </div>
        <div class="footer-lower">
          <div class="footer-column">
            <h4>Get Started</h4>
            <p>
              Get started with our platform and explore amazing heritage sites.
            </p>
            {/* <div class="email-input">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div> */}
          </div>
          <div class="footer-column">
            <h4>Services</h4>
            <ul>
              <li>3D Modeling</li>
              <li>Virtual Tourism</li>
              <li>Augmented Reality</li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Startup Program</li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>
              <Link to="/contactus" > Contact us</Link>
            </h4>
            <p>araniko3d@gmail.com</p>
            {/* <p>+123-456-7890</p> */}
            <div class="social-icons">
              <a href="facebook.com">
                <img src="/facebook.svg" alt="facebook" />
              </a>
              <a href="linkedin.com">
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
              <a href="x.com">
                <img src="/twitter.svg" alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="top-image" style={topImageStyle}></div>
      <div className="bottom-image" style={bottomImageStyle}></div>
      <p className="copyright">
        &copy; 2023 All the rights are reserved by{" "}
        <a
          href="https://araniko3d.com"
          style={{ color: "white", textDecoration: "none" }}
        >
          araniko3d.co
        </a>
      </p>
    </div>
  );
};

export default Footer;
