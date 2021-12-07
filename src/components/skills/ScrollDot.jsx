import { Fragment } from "react";
import classes from "./ScrollDot.module.scss";

const ScrollDot = (props) => {
  const dotContainer = [];
  for (let i = 0; i < 10; i++) {
    dotContainer.push(
      <div
        key={i}
        className={`${classes["dot"]} ${
          props.scrollDotCount === i && classes["dot-active"]
        }`}
      ></div>
    );
  }
  return <Fragment>{dotContainer}</Fragment>;
};

export default ScrollDot;
