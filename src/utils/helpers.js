import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export function FitBounds({ geoJsonFeature }) {
  const map = useMap();

  useEffect(() => {
    if (geoJsonFeature) {
      const layer = L.geoJSON(geoJsonFeature);
      map.fitBounds(layer.getBounds());
    }
  }, [map, geoJsonFeature]);

  return null;
}
