import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/updot-logo.svg";
import { navStateAction } from "../../../store/NavState";
import { useGlobalDispatchContext } from "../../../context/globalContext";

import classes from "./Header.module.scss";

const Header = (props) => {
  const dispatch = useDispatch();
  const cursorDispatch = useGlobalDispatchContext();

  const arrowCurrCords = useSelector(
    (state) => state.mouseLocation.currLocation
  );
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );
  // const [showBg, setShowBg] = useState(true);
  const [bgColor, setBgColor] = useState("");
  const isNavActive = useSelector((state) => state.navState.isActive);
  let navStyle = {};
  // if (isNavActive && window.innerWidth > 800) {
  //   navStyle["right"] = "unset";
  //   navStyle["left"] = arrowCurrCords.x;
  //   navStyle["top"] = arrowCurrCords.y;
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     if (window.scrollY > 100) {
  //       setShowBg(false);
  //     } else {
  //       setShowBg(true);
  //     }
  //   });
  // }, []);
  useEffect(() => {
    if (isNavActive) {
      // if (isLightThemeActive) {
      //   setBgColor("var(--text-color)");
      // } else {
      //   setBgColor("var(--bg-color)");
      // }

      setTimeout(() => {
        setBgColor("#000");
      }, 1000);
    } else {
      setBgColor("");
    }
  }, [isNavActive, isLightThemeActive]);

  return (
    <Fragment>
      <div
        className={`${classes["header"]} ${
          !props.headerDisplayed ? classes["header-hide"] : ""
        }`}
      >
        <Link
          className={classes["logo-container"]}
          to="/"
          onClick={() => {
            isNavActive && dispatch(navStateAction.toggleNav());
          }}
          onMouseEnter={() => cursorDispatch("cursor-main")}
          onMouseLeave={cursorDispatch}
        >
          <img
            src={logo}
            alt="updot logo"
            style={{ backgroundColor: bgColor }}
          />
          {isNavActive && <p>Home</p>}
        </Link>
        {!isNavActive ? (
          <div className={classes["nav-button-wrapper"]}>
            <div
              data-name="nav-btn"
              className={classes["nav-btn"]}
              style={navStyle}
              onClick={() => dispatch(navStateAction.toggleNav())}
            >
              <span className={`${isNavActive}`}>&nbsp;</span>
              <span className={`${isNavActive}`}>&nbsp;</span>
            </div>
          </div>
        ) : null}
      </div>
      {/* {window.innerWidth > 800 && (
        <div
          className={`${classes["nav-button-bg"]} ${
            isNavActive
              ? classes["nav-button-bg-active"]
              : classes["nav-button-bg-hide"]
          }`}
          onClick={() => dispatch(navStateAction.toggleNav())}
          style={{ opacity: showBg ? 1 : 0 }}
        >
          &nbsp;
        </div>
      )} */}
    </Fragment>
  );
};

export default Header;
