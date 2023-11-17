import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import "./Monuments.css";

export const Monument = ({ data }) => {
  const navigate = useNavigate();

  const navigateToDescriptionPage = () => {
    // const title = data.title.replace(/\s/g, "").toLowerCase();
    const title = data.title.replace(/\s/g, "");

    navigate(`/description-page/${title}`);
  };

  return (
    <div className="monument-container ">
      {/* //for image // hover:scale-10 */}
      <img
        src={`monuments/${data.images[0]}`}
        alt=""
        className="monument-image"
      />
      {/* <div className="py-3 px-3" onClick={routeChange}> */}
      <h5 className="title">{data.title}</h5>
      <div className="monument-description">
        <p>
          <span>Description</span>:{" "}
          {data.description.split(" ").slice(0, 30).join(" ")}
          {data.description.split(" ").length > 30 ? "..." : ""}
        </p>

<<<<<<< HEAD
        <div className="flex m-0 p-0 right gap-2" style={{ marginTop: '-20px', marginLeft: '-5px' }}>
          <div className="flex m-0 p-0 gap-2"
                onClick={navigateToDescriptionPage}
              >
=======
        <div
          className="flex m-0 p-0 right gap-2"
          style={{ marginTop: "-10px", marginLeft: "-5px" }}
        >
          <div
            className="flex m-0 p-0 gap-2"
            onClick={navigateToDescriptionPage}
          >
>>>>>>> b6f3dda9591dc4a78b460ce8b58d6101712fc37e
            <img src="info.svg" alt="" className="m-0 p-0" />
            <p className="m-0 p-0">Details</p>
          </div>
          <div className="flex m-0 p-0 gap-2">
            <img src="location.svg" alt="" className="m-0 p-0" />
            <p className="m-0 p-0">Map</p>
          </div>
        </div>
        <p>
          {data.address}, {data.city}, {data.country}
        </p>
      </div>
    </div>
  );
};
