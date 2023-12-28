import React from "react";
import "./styles.css";
import Danda from "./images/Dr.DandaPaniPaudel.png";
import Bishad from "./images/bishad.png";
import Regish from "./images/regish.png";
import Salina from "./images/salina.png";
import Tek from "./images/tek.png";

import BgImage from "./images/slantRectangle.png";
import NavArrow from "./images/meetallmembers.png";
import FacebookIcon from "./images/facebookIcon.png";
import LinkedinIcon from "./images/instaIcon.png";
import TwitterIcon from "./images/TwitterIcon.png";

const experts = () => {
  return (
    <div className="expertpage">
      <div id="team" className="experts-section">
        <div className="nav-arrow">
          <img src={NavArrow} alt="Slide Icon" />
        </div>
        <p className="OurExperts">Our Team</p>
        <p className="OExperts">
          Our <span>Team</span>
        </p>

        {/* Create a container for the frames */}
        <div className="expert-container">
          {/* Frame with background image and expert image */}

          <div className="expert-frame full-width">
            <div className="background-image .first-row">
              <img src={BgImage} alt="Expert Background" />
            </div>
            <div className="expert-image">
              <img src={Danda} alt="Expert" />
            </div>
            <div className="expert-social-icons">
              <img src={FacebookIcon} alt="Facebook" />
              <img src={LinkedinIcon} alt="LinkedIn" />
              <img src={TwitterIcon} alt="Twitter" />
            </div>
            <div className="expert-details">
              <div className="expert-name">Dr. Danda Pani Paudel</div>
              {/* <div className="expert-position">CEO</div> */}
            </div>
          </div>
          <div className="flexed-row">
            <div className="expert-frame">
              <div className="background-image">
                <img src={BgImage} alt="Expert Background" />
              </div>
              <div className="expert-image">
                <img src={Bishad} alt="Expert" />
              </div>
              <div className="expert-social-icons">
                <img src={FacebookIcon} alt="Facebook" />
                <img src={LinkedinIcon} alt="LinkedIn" />
                <img src={TwitterIcon} alt="Twitter" />
              </div>
              <div className="expert-details">
                <div className="expert-name">Bishad Koju</div>
                {/* <div className="expert-position">CEO</div> */}
              </div>
            </div>

            {/* Repeat the frame for more experts */}
            <div className="expert-frame">
              <div className="background-image">
                <img src={BgImage} alt="Expert Background" />
              </div>
              <div className="expert-image">
                <img src={Regish} alt="Expert" />
              </div>
              <div className="expert-social-icons">
                <img src={FacebookIcon} alt="Facebook" />
                <img src={LinkedinIcon} alt="LinkedIn" />
                <img src={TwitterIcon} alt="Twitter" />
              </div>
              <div className="expert-details">
                <div className="expert-name">Regish Shrestha</div>
                {/* <div className="expert-position">COO</div> */}
              </div>
            </div>

            <div className="expert-frame">
              <div className="background-image">
                <img src={BgImage} alt="Expert Background" />
              </div>
              <div className="expert-image">
                <img src={Salina} alt="Expert" />
              </div>
              <div className="expert-social-icons">
                <img src={FacebookIcon} alt="Facebook" />
                <img src={LinkedinIcon} alt="LinkedIn" />
                <img src={TwitterIcon} alt="Twitter" />
              </div>
              <div className="expert-details">
                <div className="expert-name">Salina Gurung</div>
                {/* <div className="expert-position">HR</div> */}
              </div>
            </div>

            <div className="expert-frame">
              <div className="background-image">
                <img src={BgImage} alt="Expert Background" />
              </div>
              <div className="expert-image">
                <img src={Tek} alt="Expert" />
              </div>
              <div className="expert-social-icons">
                <img src={FacebookIcon} alt="Facebook" />
                <img src={LinkedinIcon} alt="LinkedIn" />
                <img src={TwitterIcon} alt="Twitter" />
              </div>
              <div className="expert-details">
                <div className="expert-name">Tek Jung Singh</div>
                {/* <div className="expert-position">HR</div> */}
              </div>
            </div>

            {/* Add more frames for additional experts as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default experts;
