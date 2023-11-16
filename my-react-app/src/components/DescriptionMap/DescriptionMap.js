import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./DescriptionMap.css";
import L from "leaflet"; // Import the 'L' object from the 'leaflet' package

// import { FaMapMarker } from "react-icons/fa";

export const DescriptionMap = ({ position }) => {
  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={false}
      className="description-map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={position}
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
      </Marker>
    </MapContainer>
  );
};
