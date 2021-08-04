import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import classes from "./Landing.module.css";

import LandingUpdot from "./LandingUpdot";

import updotBlack from "../../assets/img/updot-black.svg";
import { pageStateAction } from "../../store/pageState";

const Landing = () => {
  const isLoaded = useSelector((state) => state.pageState.isLoaded);
  const dispatch = useDispatch();
  const [updotSize, setUpdotSize] = useState({});
  const landingRef = useRef(null);
  window.onload = (e) => {
    dispatch(pageStateAction.setLoaded());
  };
  useEffect(() => {
    if (isLoaded) {
      window.onkeyup = (e) => {
        landingRef.current.style.display = "none";
      };
      window.addEventListener("click", (e) => {
        landingRef.current.style.display = "none";
      });
    }
  }, [isLoaded]);
  let updots = [];
  useEffect(() => {
    setUpdotSize({
      height: "100%",
      width: "100%",
    });
  }, []);

  for (let i = 0; i < 10 * 5; i++) {
    updots.push(<LandingUpdot key={i} size={updotSize} />);
  }
  return (
    <div ref={landingRef} className={classes.landing}>
      <div className={classes["landing-container"]}>{updots}</div>
      <div className={classes["landing-updot-black"]}>
        <img src={updotBlack} alt="updot" />
      </div>
      {!isLoaded && (
        <div className={classes["loader-dot-container"]}>
          <div
            className={`${classes["loader-dot"]} ${classes["loader-dot-1"]}`}
          ></div>
          <div
            className={`${classes["loader-dot"]} ${classes["loader-dot-2"]}`}
          ></div>
          <div
            className={`${classes["loader-dot"]} ${classes["loader-dot-3"]}`}
          ></div>
          <div
            className={`${classes["loader-dot"]} ${classes["loader-dot-4"]}`}
          ></div>
        </div>
      )}
      {isLoaded && (
        <div className={classes["loader-dot-container"]}>
          <p>Press any key</p>
        </div>
      )}
    </div>
  );
};

export default Landing;
