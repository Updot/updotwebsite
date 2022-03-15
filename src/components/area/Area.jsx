import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import SectionHeading from "../ui/SectionHeading";
import AreaMapIndia from "./AreaMapIndia";
import AreaMapUae from "./AreaMapUae";
import AreaSwitch from "./areaSwitch/AreaSwitch";
// import AreaStates from "./AreaStates";

import classes from "./Area.module.scss";

const Area = () => {
  const currMap = useSelector((state) => state.mapState.currMap);
  const mapContainerRef = useRef(null);
  const indiaMapRef = useRef(null);
  const uaeMapRef = useRef(null);
  const stateIndicatorRef = useRef(null);
  useEffect(() => {
    const scrollHandler = (e) => {
      stateIndicatorRef.current.style.opacity = "0";
    };
    window.addEventListener("scroll", scrollHandler);
    window.map = currMap;
    let onEntry = (entries) => {
      entries.forEach((change) => {
        if (change.isIntersecting) {
          if (window.map === "ind") {
            indiaMapRef.current.animateMap();
          } else uaeMapRef.current.animateMap();
        } else {
          if (window.map === "ind") {
            indiaMapRef.current.removeAnimation();
          } else uaeMapRef.current.removeAnimation();
        }
      });
    };
    let options = {
      threshold: [0.6],
    };

    let observer = new IntersectionObserver(onEntry, options);
    observer.observe(mapContainerRef.current);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [currMap]);
  return (
    <div className={`container ${classes["area-container"]}`}>
      <SectionHeading>Covered Area</SectionHeading>
      <div className={classes["area-inner"]}>
        <div className={classes["area-map-container"]}>
          {currMap === "ind" && <AreaMapIndia ref={indiaMapRef} />}
          {currMap === "uae" && <AreaMapUae ref={uaeMapRef} />}
        </div>
        <div ref={mapContainerRef} className={classes["area-switch-container"]}>
          <AreaSwitch current={currMap} />
        </div>
      </div>
      <div
        ref={stateIndicatorRef}
        data-type="indicator"
        className={classes["state-indicator"]}
      >
        <p className={classes["state-name"]}>Kerla</p>
        <span className={classes["h-line"]}></span>
        {/* <span className={classes["angle-line"]}></span> */}
      </div>
    </div>
  );
};

export default Area;
