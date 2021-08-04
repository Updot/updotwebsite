import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mouseLocationAction } from "../../store/mouseLocation";

import classes from "./MouseArrow.module.css";
// let timeout;
const MouseArrow = () => {
  const arrowCurrCords = useSelector(
    (state) => state.mouseLocation.currLocation
  );
  const arrowRestCords = useSelector(
    (state) => state.mouseLocation.restLocation
  );
  const dispatch = useDispatch();
  useEffect(() => {
    window.onmousemove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      dispatch(mouseLocationAction.setCurrLocation({ x, y }));
      // timeout = setTimeout(() => {
      //   dispatch(mouseLocationAction.setCurrLocation(arrowRestCords));
      // }, 5000);
    };

    // return () => {
    //   clearTimeout(timeout);
    // };
  }, [dispatch, arrowRestCords]);

  const arrowLocation = {
    left: `${arrowCurrCords.x}px`,
    top: `${arrowCurrCords.y}px`,
  };
  return (
    <div
      data-arrow="mousearrow"
      className={classes.arrow}
      style={arrowLocation}
    ></div>
  );
};

export default MouseArrow;
