import React from "react";
import { Map } from "../components/Map/Map.js";
import { SearchBar } from "../components/SearchBar/SearchBar.js";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "./MapPage.css"; // Import your custom CSS
import { useState } from "react";

const MapPage = () => {
  const [center, setCenter] = useState([27.6735697, 85.3223784]);
  const [zoom, setZoom] = useState(8);
  console.log(center);
  return (
    <>
      <div>
        <SearchBar setCenter={setCenter} setZoom={setZoom} />
      </div>
      <div className="map-container">
        <Map center={center} zoom={zoom} />
      </div>
    </>
  );
};

export default MapPage;
