// import React, { useState } from "react";
// import ReactPannellum from "react-pannellum";

// const Image = () => {
//   const [loaded, setLoaded] = useState(false);

//   const handleMouseDown = () => {
//     if (!loaded) {
//       console.log("Panorama loaded");
//       setLoaded(true);
//     }
//   };

//   const config = {
//     autoRotate: -2,
//   };

//   return (
//     <div>
//       <ReactPannellum
//         id="1"
//         sceneId="firstScene"
//         imageSource="https://pannellum.org/images/alma.jpg"
//         config={config}
//         onMouseDown={handleMouseDown}
//       />
//       {!loaded && <div onClick={handleMouseDown}>Click me</div>}
//     </div>
//   );
// };

// export default Image;

// import React from "react";
// import ReactPannellum, { getConfig } from "react-pannellum";

// class Image extends React.Component {
//   click() {
//     console.log(getConfig());
//   }

//   render() {
//     const config = {
//       autoRotate: -2,
//     };
//     return (
//       <div>
//         <ReactPannellum
//           id="1"
//           sceneId="firstScene"
//           imageSource="https://pannellum.org/images/alma.jpg"
//           config={config}
//         />
//         <div onClick={this.click}>Click me</div>
//       </div>
//     );
//   }
// }
// export default Image;

import React, { useState } from "react";
import ReactPannellum, { getConfig } from "react-pannellum";
import "./360image.css";

const Image = ({ imageUrl }) => {
  const [loaded, setLoaded] = useState(false);

  //   const handleMouseDown = () => {
  //     if (!loaded) {
  //       console.log("Panorama loaded");
  //       setLoaded(true);
  //     }
  //   };

  const config = {
    autoRotate: -2,
  };

  return (
    <div class="image-container">
      <ReactPannellum
        id={imageUrl}
        sceneId="firstScene"
        imageSource={`/pano/${imageUrl}`}
        config={config}
        // onMouseDown={handleMouseDown}
      />
      {/* {!loaded && <div onClick={handleMouseDown}>Click me</div>} */}
    </div>
  );
};

export default Image;
