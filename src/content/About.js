import React from 'react';
import TempleImage from "./images/temple.png";

const About = () => {
  return (
    <div id="about" className="about-page">
      <p className='about-us'>About Us</p>
      <p className='about'>About <span> Us</span></p>

      <div className='about-box'>
        <p className='about-para'>Araniko is highly dedicated team committed to promoting cultural sites in Nepal and worldwide. They tirelessly work to raise awareness, protect and showcase the rich history and significance of these sites. Through events, partnerships, responsible tourism, and digital platforms, Araniko strives to preserve and elongate the lifespan of the cultural heritages for future generation.  </p>
      </div>
      <div className="about-image">
            <img src={TempleImage} alt="About Image" />
      </div>
    </div>
  );
}

export default About;

