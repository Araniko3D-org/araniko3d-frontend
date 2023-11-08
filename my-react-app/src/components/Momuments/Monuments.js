import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import "./Monuments.css";

export const Monument = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="monuments-container">
      {/* //for image // hover:scale-10 */}
      <img src={`monuments/${data.images[0]}`} alt="" className="monuments-image" />
      {/* <div className="py-3 px-3" onClick={routeChange}> */}
      <h5>{data.title}</h5>
      <div className="monuments-description">
        <p>
          <span>Description</span>:{" "}
          {data.description.split(" ").slice(0, 50).join(" ")}
          {data.description.split(" ").length > 50 ? "..." : ""}
        </p>

        <a href={data.mapUrl}>Google map</a>
        <p>
          {data.address}, {data.city}, {data.country}
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};
