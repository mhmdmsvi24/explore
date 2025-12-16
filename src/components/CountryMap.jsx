import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import countryData from "../data/geoJsonData.geo.json";
import { FitBounds } from "../utils/helpers";


function CountryMap({ countryName }) {
  // Find the feature that matches the selected country
  const countryFeature = countryData.features.find(
    (f) => f.properties.name === countryName
  );

  const style = {
    color: "#0077ff", // blue border color
    weight: 2,
    opacity: 0.5,
  };

  // Fallback if not found
  if (!countryFeature) {
    return <div className="text-red-300 font-bold">Map data not available</div>;
  }

  return (
    <MapContainer
      style={{ width: "100%", height: "200px" }}
      scrollWheelZoom={false}
      attributionControl={false}
      dragging={false}
      boxZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={countryFeature} style={style} />
      <FitBounds geoJsonFeature={countryFeature} />
    </MapContainer>
  );
}

export default CountryMap;
