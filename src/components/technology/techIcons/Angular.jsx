import { useState } from "react";
import classes from "./TechIcon.module.css";

const Angular = () => {
  const [isHover, setIsHover] = useState(false);
  const mouseOverHandler = () => {
    setIsHover(true);
  };
  const mouseOutHandler = () => {
    setIsHover(false);
  };
  let fill1 = isHover ? "#B52E31" : "#000";
  let fill2 = isHover ? "#B52E31" : "#fff";
  let fill3 = isHover ? "#fff" : "#000";
  return (
    <div
      className={`${classes.icon} ${classes["angular-icon"]}`}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="111.358"
        height="117.964"
        viewBox="0 0 111.358 117.964"
      >
        <g id="angular-icon" transform="translate(-466 -3616.449)">
          <path
            id="Path_489"
            data-name="Path 489"
            d="M56.35.341.849,19.873,9.62,92.589,56.409,118.3,103.44,92.24l8.767-72.713Z"
            transform="translate(465.151 3616.108)"
            fill={fill1}
          />
          <path
            id="Path_494"
            data-name="Path 494"
            d="M-9110.818-569.875l6.163,2.09,44.146,14.968-8,65.275-42.309,23.373-42.129-23.373-7.159-65.275Z"
            transform="translate(9632.19 4192.509)"
            fill={fill2}
          />
          <path
            id="Path_492"
            data-name="Path 492"
            d="M97.142,75.625,83.254,82.12H68.617l-6.88,17.21-12.8.236L83.254,23.227l13.887,52.4ZM95.8,72.356,83.346,47.7,73.132,71.932H83.254l12.545.425Z"
            transform="translate(438.118 3603.243)"
            fill={fill3}
          />
          <path
            id="Path_493"
            data-name="Path 493"
            d="M127.309,23.226,127.4,47.7l11.59,24.247H127.335L127.309,82.1l16.117.015,7.533,17.449,12.245.227-35.9-76.569Z"
            transform="translate(394.063 3603.244)"
            fill={fill3}
          />
        </g>
      </svg>
    </div>
  );
};

export default Angular;
