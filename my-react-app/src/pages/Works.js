import React from 'react';
import "../styles/works.css"

const Works = () => {
  return (
    <div className="works-container">
      {/* Display "Our Work" at the top */}
      <h1>OUR WORKS</h1>

      {/* Create a container for the frame */}
      <div className="frame-container">
        {/* Rectangle with text overlapping at the bottom */}
        <div className="frame">
          <div className="image">
          <img src="/images/temple.jpg" alt="Work 1" />
          </div>
          <div className="text-overlay">
          <h4>Name of heritage</h4>
           <h5>Method used</h5>
          </div>
        </div>

        {/* Repeat the frame for more images */}
         <div className="frame">
          <div className="image">
          <img src="/images/temple.jpg" alt="Work 1" />
          </div>
          <div className="text-overlay">
           <h4>Name of heritage</h4>
           <h5>Method used</h5>
          </div>
        </div> 
      </div>


    </div>

    
  );
};

export default Works;