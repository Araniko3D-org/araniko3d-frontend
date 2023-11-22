import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "./Map.css"; // Import your custom CSS
import L from "leaflet"; // Import the 'L' object from the 'leaflet' package

import { locationData } from "../../data/locations";

import { Monument } from "../Momuments/Monuments";

// import Services from "./services";

export const Map = ({ center, zoom }) => {
  console.log(center, zoom);

  // const mapRef = useRef(null);

  // useEffect(() => {
  //   if (mapRef.current) {
  //     // Update map center and zoom when props change
  //     mapRef.current.setView(center, zoom);
  //   }
  // }, [center, zoom]);

  const markers = [
    {
      geocode: [27.6735697, 85.3223784],
      popUp: <Monument data={locationData[0]} />,
      // popUp: "Krishna Mandir",
    },
    {
      geocode: [27.6794234, 85.2739021],
      popUp: <Monument data={locationData[1]} />,
    },
    {
      geocode: [27.680058, 85.272057],
      popUp: <Monument data={locationData[2]} />,
    },
    {
      geocode: [27.6752289, 85.3219734],
      popUp: <Monument data={locationData[3]} />,
    },
  ];

  const customClusterIcon = new L.Icon({
    iconUrl: "icon.svg",
    iconSize: [40, 40], // Adjust the size as needed
    iconAnchor: [20, 20], // Adjust the anchor point if needed
  });

  return (
    <MapContainer
      key={`${center[0]}-${center[1]}-${zoom}`}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      className="map"
      // whenCreated={(map) => {
      //   mapRef.current = map;
      // }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Hide the zoom in and zoom out buttons using CSS */}
      <style>
        {`
    .leaflet-top.leaflet-left .leaflet-control-zoom-in,
    .leaflet-top.leaflet-left .leaflet-control-zoom-out {
      display: none;
    }
  `}
      </style>

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={() => customClusterIcon}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geocode}
            icon={L.icon({
              iconUrl: "icon.svg",
              iconSize: [41, 61],
              iconAnchor: [12, 41],
            })}
          >
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
