import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import classes from "./Map.module.scss";
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
const Map = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoid2VidGVzdC1wYSIsImEiOiJja2U4bDIxamoxbnViMnJsNnpmYWNlbG8zIn0.WCCUuSN7nebAujC9T6cZMA";
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/webtest-pa/ckv3qzmbr0fst14nzi5b2pja9",
      center: [77.52238497381373, 13.094603078358213],
      zoom: 12,
      attributionControl: false,
    });
    new mapboxgl.Marker({ color: "white" })
      .setLngLat([77.52238497381373, 13.094603078358213])
      .addTo(map);
    map.flyTo({ center: [77.52238497381373, 13.094603078358213], zoom: 10 });
    map.scrollZoom.disable();
    if (window.innerWidth < 800) {
      map.dragPan.disable();
    }

    // map.on("load", () => {
    //   // Load an image from an external URL.
    //   map.loadImage(
    //     "https://docs.mapbox.com/mapbox-gl-js/assets/cat.png",
    //     (error, image) => {
    //       if (error) throw error;

    //       // Add the image to the map style.
    //       map.addImage("pin", image);

    //       // Add a data source containing one point feature.
    //       map.addSource("point", {
    //         type: "geojson",
    //         data: {
    //           type: "FeatureCollection",
    //           features: [
    //             {
    //               type: "Feature",
    //               geometry: {
    //                 type: "Point",
    //                 coordinates: [77.52238497381373, 13.094603078358213],
    //               },
    //             },
    //           ],
    //         },
    //       });

    //       // Add a layer to use the image to represent the data.
    //       map.addLayer({
    //         id: "points",
    //         type: "symbol",
    //         source: "point", // reference the data source
    //         layout: {
    //           "icon-image": "pin", // reference the image
    //           "icon-size": 0.25,
    //         },
    //       });
    //     }
    //   );
    // });
  }, []);
  return (
    <div className={classes["map-outer"]}>
      <div className={classes["map"]} ref={mapRef}></div>
    </div>
  );
};

export default Map;
