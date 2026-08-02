"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const pune = [18.5204, 73.8567];
const pandharpur = [17.6792, 75.3300];

export default function ContactMap() {
    return (
        <section className="contact-map">

            <div className="section-title">
                <h2>Our Locations</h2>
            </div>

            <MapContainer
                center={[18.1, 74.6]}
                zoom={8}
                scrollWheelZoom={false}
                style={{
                    height: "550px",
                    width: "100%",
                    borderRadius: "18px",
                }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={pune}>
                    <Popup>
                        <strong>Pune Office</strong>
                        <br />
                        Pune, Maharashtra, India
                    </Popup>
                </Marker>

                <Marker position={pandharpur}>
                    <Popup>
                        <strong>Pandharpur Office</strong>
                        <br />
                        Pandharpur, Maharashtra, India
                    </Popup>
                </Marker>

            </MapContainer>

        </section>
    );
}