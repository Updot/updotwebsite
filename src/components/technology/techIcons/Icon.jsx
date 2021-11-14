// import { useState } from "react";
import classes from "./Icon.module.css";

const image = require.context("../../../assets/img/services-icons/");
const Icon = (props) => {
  // const [isHover, setIsHover] = useState(false);
  const iconImage = image(`./${props.tech}.svg`);
  const iconColorImage = image(`./${props.tech}-color.svg`);
  return (
    <div
      className={`${classes.icon} ${classes[`icon-${props.index + 1}`]}`}
      // onMouseOver={() => setIsHover(true)}
      // onMouseOut={() => setIsHover(false)}
    >
      {
        // <img
        //   src={isHover ? iconColorImage.default : iconImage.default}
        //   alt={props.tech}
        // />
      }
      <img src={iconImage.default} alt={props.tech} />
      <img src={iconColorImage.default} alt={props.tech} />
    </div>
  );
};

export default Icon;
