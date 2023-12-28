// export default Image;
import React from "react";
import ReactPannellum from "react-pannellum";
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
        sceneId={`Scene${imageUrl}`}
        imageSource={`/pano/${imageUrl}`}
        config={config}
      />
    </div>
  );
};

export default Image;
