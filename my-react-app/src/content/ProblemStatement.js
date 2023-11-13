// ProblemStatement.js

import React from 'react';
import './styles.css';
const ProblemStatement = () => {
  return (
    <div id= "problem " className="problem-container">
      <p className='problem-statement'>Problem Statement </p>
      <p className='problem'>Problem <span> Statement</span></p>

      <div className=' problem-box'>
        <p className='problem-para'>Lack of accurate documentation with enough details, which can cause challenges in restoration</p>
      </div>
    </div>
  );
};

export default ProblemStatement;
