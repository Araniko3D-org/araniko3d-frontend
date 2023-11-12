// import React, { useEffect } from "react";
// import * as PANOLENS from "panolens";
// // import "panolens.min.js";
// import "./360image.css"; // Import your custom styles

// // import * as THREE from "three";

// const ImagePano = () => {
//   useEffect(() => {
//     const panorama = new PANOLENS.ImagePanorama("images/panel1.jpeg");
//     const panorama2 = new PANOLENS.ImagePanorama("images/pano5.jpg");
//     let imageContainer = document.querySelector(".image-container");

//     var infospotPositions = [
//       new PANOLENS.Vector3(-2136.06, 16.3, 890.14),
//       new PANOLENS.Vector3(-3136.06, 296.3, -4290.14),
//     ];

//     const viewer = new PANOLENS.Viewer({
//       container: imageContainer,
//       autoRotate: true,
//       autoRotateSpeed: 0.3,
//       controlBar: true,
//       width: "80%",
//     });

//     panorama.link(panorama2, infospotPositions[0]);
//     panorama2.link(panorama, infospotPositions[1]);

//     viewer.add(panorama, panorama2);

//     // Clean up on component unmount
//     return () => {
//       viewer.dispose();
//     };
//   }, []); // Empty dependency array ensures that this effect runs only once on component mount

//   return (
//     <div className="pano-image">
//       <div className="image-container">
//         {/* Your other React components go here */}
//       </div>
//     </div>
//   );
// };

// export default ImagePano;
