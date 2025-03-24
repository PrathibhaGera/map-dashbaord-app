import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Navbar from "../components/Navbar";

class MapPage extends Component {
  render() {
    const { id } = this.props;

    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1>Map View for Card {id}</h1>
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={4.5}
            style={{ height: "400px", width: "80%", margin: "20px auto" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>
      </>
    );
  }
}

export default function MapPageWithParams(props) {
  const { id } = useParams();
  return <MapPage {...props} id={id} />;
}
