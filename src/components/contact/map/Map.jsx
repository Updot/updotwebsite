import { useEffect, useRef } from "react";
import classes from "./Map.module.css";

const Map = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    var map = window.L.map(mapRef.current).setView([37.837, -122.479], 10);
    var layer = window.L.esri.basemapLayer("Topographic").addTo(map);
    var layerLabels;
    window.L.esri
      .featureLayer({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0",
      })
      .addTo(map);
    function setBasemap(basemap) {
      if (layer) {
        map.removeLayer(layer);
      }

      layer = window.L.esri.basemapLayer(basemap);

      map.addLayer(layer);

      if (layerLabels) {
        map.removeLayer(layerLabels);
      }

      if (
        basemap === "ShadedRelief" ||
        basemap === "Oceans" ||
        basemap === "Gray" ||
        basemap === "DarkGray" ||
        basemap === "Terrain"
      ) {
        layerLabels = window.L.esri.basemapLayer(basemap + "Labels");
        map.addLayer(layerLabels);
      } else if (basemap.includes("Imagery")) {
        layerLabels = window.L.esri.basemapLayer("ImageryLabels");
        map.addLayer(layerLabels);
      }
    }
    setBasemap("DarkGray");
  }, []);
  return (
    <div className={classes["map-outer"]}>
      <div className={classes["map"]} ref={mapRef}></div>
    </div>
  );
};

export default Map;
