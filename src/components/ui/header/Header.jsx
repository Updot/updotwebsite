import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/updot-logo.svg";
import { navStateAction } from "../../../store/NavState";

import classes from "./Header.module.css";

const Header = (props) => {
  const dispatch = useDispatch();
  const arrowCurrCords = useSelector(
    (state) => state.mouseLocation.currLocation
  );
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );
  const [showBg, setShowBg] = useState(true);
  const [bgColor, setBgColor] = useState("");
  const isNavActive = useSelector((state) => state.navState.isActive);
  let navStyle = {};
  if (isNavActive && window.innerWidth > 800) {
    navStyle["right"] = "unset";
    navStyle["left"] = arrowCurrCords.x;
    navStyle["top"] = arrowCurrCords.y;
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) {
        setShowBg(false);
      } else {
        setShowBg(true);
      }
    });
  }, []);
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
      const navBtn = document.querySelector('[data-name="nav-btn"]');
      navBtn.classList.remove("hide");
    }
  }, [isNavActive, isLightThemeActive]);

  const mouseHoverHandler = () => {
    if (isNavActive) {
      const navBtn = document.querySelector('[data-name="nav-btn"]');
      navBtn.classList.add("hide");
      document.querySelector("[data-arrow='mousearrow']").style.opacity = 1;
    }
  };
  const mouseOutHandler = () => {
    if (isNavActive) {
      const navBtn = document.querySelector('[data-name="nav-btn"]');
      navBtn.classList.remove("hide");
      document.querySelector("[data-arrow='mousearrow']").style.opacity = 0;
    }
  };

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
          onMouseOver={mouseHoverHandler}
          onMouseOut={mouseOutHandler}
        >
          <img
            src={logo}
            alt="updot logo"
            style={{ backgroundColor: bgColor }}
          />
          {isNavActive && <p>Home</p>}
        </Link>
        <div className={classes["nav-button-wrapper"]}>
          <div
            data-name="nav-btn"
            className={classes["nav-btn"]}
            style={navStyle}
            onClick={() => dispatch(navStateAction.toggleNav())}
          >
            <span className={`${isNavActive && classes["rotate-top"]}`}>
              &nbsp;
            </span>
            <span className={`${isNavActive && classes["rotate-up"]}`}>
              &nbsp;
            </span>
          </div>
        </div>
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
