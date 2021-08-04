import { useState } from "react";
import classes from "./TechIcon.module.css";

const Css = () => {
  const [isHover, setIsHover] = useState(false);
  const mouseOverHandler = () => {
    setIsHover(true);
  };
  const mouseOutHandler = () => {
    setIsHover(false);
  };
  let fill = isHover ? "#264de4" : "#000";
  return (
    <div
      className={`${classes.icon} ${classes["css-icon"]}`}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="103.356"
        height="117.216"
        viewBox="0 0 103.356 117.216"
      >
        <g
          id="Group_20"
          data-name="Group 20"
          transform="translate(-1117 -3571.784)"
        >
          <path
            id="polygon2989"
            d="M177.989,100.62,168.573,206.1l-42.325,11.734L84.039,206.119l-9.406-105.5Z"
            transform="translate(1042.367 3471.164)"
            fill={fill}
          />
          <path
            id="Union_3"
            data-name="Union 3"
            d="M5.881,65.913,4.068,45.6H17.057l.921,10.319,14.41,3.891.012,0h0l14.431-3.9,1.5-16.781H3.49L2.33,26.189H49.455l1.178-13.25H1.176L0,0H64.813L62.477,26.189l-.316,3.474L59.121,63.727l-.194,2.186L32.445,73.253v0l-.059.017Z"
            transform="translate(1136.233 3593.349)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

export default Css;
