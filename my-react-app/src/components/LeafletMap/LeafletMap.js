// LeafletMap.js
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

const LeafletMap = ({ position }) => {
  const map = useMap();

  let defaultIcon = L.icon({
    iconUrl: "/icon.svg",
    iconSize: [41, 61],
    iconAnchor: [12, 41],
  });

  L.Marker.prototype.options.icon = defaultIcon;

  // Fly to the position when the component mounts
  useEffect(() => {
    map.flyTo(position, 14, {
      duration: 2,
    });
  }, [map, position]);

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={defaultIcon}>
        <Popup>
          Sundari Chowk, also known as the Beautiful Courtyard, is a remarkable{" "}
          <br />
          architectural gem located within the historic city of
          <br />
          Bhaktapur in Nepal's Kathmandu Valley.
        </Popup>
      </Marker>
    </>
  );
};

export default LeafletMap;
