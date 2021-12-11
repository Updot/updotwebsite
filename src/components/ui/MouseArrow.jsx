import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mouseLocationAction } from "../../store/mouseLocation";

import classes from "./MouseArrow.module.scss";

const MouseArrow = () => {
  const arrowCurrCords = useSelector(
    (state) => state.mouseLocation.currLocation
  );
  const arrowRestCords = useSelector(
    (state) => state.mouseLocation.restLocation
  );
  const isLoaderHidden = useSelector(
    (state) => state.pageState.isLoaderRemoved
  );
  const isNavActive = useSelector((state) => state.navState.isActive);
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isNavActive) {
      document.querySelector("[data-arrow='mousearrow']").style.opacity = 1;
    }
  }, [isNavActive]);

  useEffect(() => {
    window.onmousemove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      if (isLoaderHidden) {
        setTimeout(() => {
          document.querySelector("[data-arrow='mousearrow']").style.transition =
            "unset";
        }, 200);
      }
      dispatch(mouseLocationAction.setCurrLocation({ x, y }));
    };
  }, [dispatch, isLoaderHidden, arrowRestCords]);

  useEffect(() => {
    // let timeout = setTimeout(() => {
    //   document.querySelector("[data-arrow='mousearrow']").style.transition =
    //     "all 0.2s linear";
    //   if (window.scrollY < 200) {
    //     dispatch(mouseLocationAction.setCurrLocation(arrowRestCords));
    //   }
    // }, 3000);
    // return () => {
    //   clearTimeout(timeout);
    // };
  }, [arrowRestCords, dispatch, arrowCurrCords]);

  let dotColor;
  if (isLightThemeActive) dotColor = "#000";
  else dotColor = "#fff";

  const arrowLocation = {
    backgroundColor: `${dotColor}`,
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
