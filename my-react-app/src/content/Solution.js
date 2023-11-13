import React from 'react';
import './styles.css';

const Solution = () => {
  return (
    <div id="solution" className="solution-page">
      <p className='solution-our'>Our Solution</p>
      <p className='solution'>Our <span> Solution</span></p>

        <div className="left-div">
            <img src="bulb.png" alt="Solution Image" />
        </div>
        <div className="right-div">
            <div className="transparent-box">
            <ul>
                <li>Realistic</li>
                <li>Cost Effective</li>
                <li>Scalable</li>
                <li>Accurate 3D replica using state-of-the-art 3D Reconstruction</li>
            </ul>
            </div>
        </div>
    </div>
  );
}

export default Solution;
