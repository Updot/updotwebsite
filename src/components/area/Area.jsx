import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mapStateAction } from "../../store/mapState";
import SectionHeading from "../ui/SectionHeading";
import AreaMapIndia from "./AreaMapIndia";
import AreaMapUae from "./AreaMapUae";
import Location from "../../assets/img/location-green.svg";
// import AreaStates from "./AreaStates";
import { areaData } from "./area-data";

import classes from "./Area.module.scss";

const Area = () => {
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );
  const currMap = useSelector((state) => state.mapState.currMap);
  const mapContainerRef = useRef(null);
  const indiaMapRef = useRef(null);
  const uaeMapRef = useRef(null);
  const stateIndicatorRef = useRef(null);
  const dispatch = useDispatch();
  const [activeState, setActiveState] = useState("");

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

  // Find the area
  const currentLoc = areaData.filter(
    (item) => item.id?.toLowerCase() === activeState.toLowerCase()
  );
  console.log(currentLoc);
  return (
    <div className={`container ${classes["area-container"]}`}>
      <SectionHeading>Covered Area</SectionHeading>
      <div className={classes["area-select-wrap"]}>
        <span
          onClick={() => dispatch(mapStateAction.setMap("ind"))}
          className={
            currMap === "ind"
              ? classes["area-label"]
              : classes["area-label-inactive"]
          }
        >
          India
        </span>
        <span
          onClick={() => dispatch(mapStateAction.setMap("uae"))}
          className={
            currMap === "uae"
              ? classes["area-label"]
              : classes["area-label-inactive"]
          }
        >
          UAE
        </span>
      </div>
      <div className={classes["area-inner"]}>
        <div className={classes["area-map-container"]} ref={mapContainerRef}>
          {currMap === "ind" && (
            <AreaMapIndia ref={indiaMapRef} setActiveState={setActiveState} />
          )}
          {currMap === "uae" && (
            <AreaMapUae ref={uaeMapRef} setActiveState={setActiveState} />
          )}
        </div>
        <div className={classes["area-switch-container"]}>
          {currentLoc.length > 0 && (
            <>
              <img
                src={currentLoc[0].img}
                alt="area img"
                style={{
                  filter: isLightThemeActive ? "invert(1)" : "invert(0)",
                }}
                className={classes["active-area-map"]}
              />
              <div className={classes["area-location"]}>
                <img src={Location} alt="loc-icon" />
                <span>{currentLoc[0].stateName}</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className={classes["area-stats-container"]}>
        {currentLoc.length > 0 && (
          <>
            <div className={classes["area-stats-wrap"]}>
              <span className={classes["stats-title"]}>Projects Done</span>
              <span className={classes["stats-count"]}>
                {currentLoc[0].projects}
              </span>
            </div>
            <hr />
            <div className={classes["area-stats-wrap"]}>
              <span className={classes["stats-title"]}>No. Of Clients</span>
              <span className={classes["stats-count"]}>
                {currentLoc[0].clients}
              </span>
            </div>
          </>
        )}
      </div>
      <div
        ref={stateIndicatorRef}
        data-type="indicator"
        className={classes["state-indicator"]}
      >
        <p className={classes["state-name"]}>Kerla</p>
        <span className={classes["h-line"]}></span>
        <span className={classes["angle-line"]}></span>
      </div>
    </div>
  );
};

export default Area;
