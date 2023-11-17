import React, { useState } from "react";
import ReactPannellum, { getConfig } from "react-pannellum";
import "./360image.css";

const Image = ({ imageUrl }) => {
  const config = {
    autoRotate: -2,
  };

  return (
    <div class="image-container">
      <ReactPannellum
        className="pano-container"
        id={imageUrl}
        sceneId="firstScene"
        imageSource={`/pano/${imageUrl}`}
        config={config}
      />
    </div>
  );
};

export default Image;
