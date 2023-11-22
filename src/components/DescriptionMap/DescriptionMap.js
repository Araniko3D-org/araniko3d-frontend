// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "./DescriptionMap.css";
// import L from "leaflet"; // Import the 'L' object from the 'leaflet' package
// import { useEffect } from "react";

// // import { FaMapMarker } from "react-icons/fa";

// export const DescriptionMap = ({ position }) => {
//   let defaultIcon = L.icon({
//     iconUrl: "/icon.svg",
//     iconSize: [41, 61],
//     iconAnchor: [12, 41],
//   });

//   L.Marker.prototype.options.icon = defaultIcon;

//   return (
//     <MapContainer
//       center={position}
//       zoom={14}
//       scrollWheelZoom={false}
//       className="description-map"
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker
//         position={position}
//         // icon={defaultIcon}
//         icon={L.icon({
//           iconUrl: "/icon.svg",
//           iconSize: [41, 61],
//           iconAnchor: [12, 41],
//         })}
//       >
//         <Popup>
//           Sundari Chowk, also known as the Beautiful Courtyard, is a remarkable{" "}
//           <br />
//           architectural gem located within the historic city of
//           <br />
//           Bhaktapur in Nepal's Kathmandu Valley.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };
// LeafletMap.js

// DescriptionMap.js
// import { MapContainer } from "react-leaflet";
// import LeafletMap from "../LeafletMap/LeafletMap";

// export const DescriptionMap = ({ position }) => {
//   return (
//     <MapContainer
//       center={position}
//       zoom={14}
//       scrollWheelZoom={false}
//       className="description-map"
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <LeafletMap position={position} />
//     </MapContainer>
//   );
// };

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./DescriptionMap.css";
import L from "leaflet"; // Import the 'L' object from the 'leaflet' package
// import { useEffect } from "react";
import LeafletMap from "../LeafletMap/LeafletMap";

// import { FaMapMarker } from "react-icons/fa";

export const DescriptionMap = ({ position }) => {
  let defaultIcon = L.icon({
    iconUrl: "/icon.svg",
    iconSize: [41, 61],
    iconAnchor: [12, 41],
  });

  L.Marker.prototype.options.icon = defaultIcon;

  return (
    <MapContainer
      center={[53.35, 18.8]}
      zoom={14}
      scrollWheelZoom={false}
      className="description-map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LeafletMap position={position} />

      {/* <Marker
        position={position}
        // icon={defaultIcon}
        icon={L.icon({
          iconUrl: "/icon.svg",
          iconSize: [41, 61],
          iconAnchor: [12, 41],
        })}
      >
        <Popup>
          Sundari Chowk, also known as the Beautiful Courtyard, is a remarkable{" "}
          <br />
          architectural gem located within the historic city of
          <br />
          Bhaktapur in Nepal's Kathmandu Valley.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};
