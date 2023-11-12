import React, { useState } from "react";

import { Link } from "react-router-dom"; // Assuming you are using React Router
import BhaktapurImage from "../../content/images/Bhaktapur.png";

const Frame = ({ data }) => {
  return (
    <div className="frame">
      <Link to="/description-page">
        <div className="service-image">
          {/* {image ? ( */}
          <img src={`/monuments/${data.images[0]}`} alt="Work 1" />
        </div>
        <div className="text-overlay">
          <h4 className="frameh4">{data.title}</h4>
          <h5 className="frameh5">{data.location}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Frame;
