import { useState } from "react";
import classes from "./TechIcon.module.css";

const Html = () => {
  const [isHover, setIsHover] = useState(false);
  const mouseOverHandler = () => {
    setIsHover(true);
  };
  const mouseOutHandler = () => {
    setIsHover(false);
  };
  let fill = isHover ? "#e34c26" : "#000";
  return (
    <div
      className={`${classes.icon} ${classes["html-icon"]}`}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="103.178"
        height="117"
        viewBox="0 0 103.178 117"
      >
        <g id="html" transform="translate(-841 -3491)">
          <path
            id="Path_496"
            data-name="Path 496"
            d="M83.985,205.94,74.6,100.6H177.778l-9.385,105.283L126.1,217.6"
            transform="translate(766.4 3390.4)"
            fill={fill}
          />
          <path
            id="Union_1"
            data-name="Union 1"
            d="M5.915,65.781,4.1,45.5H17.064l.91,10.323,14.419,3.86,14.39-3.86L48.29,39.048H32.364v-.029H3.527L0,0H64.728L63.534,12.911H14.163l1.195,13.224H62.368L58.813,65.781,32.421,73.1v.073Z"
            transform="translate(860.168 3512.529)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

export default Html;
