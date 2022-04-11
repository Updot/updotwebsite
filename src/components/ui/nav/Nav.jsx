import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";
// import SubNav from "./subNav/SubNav";
import instaIcon from "../../../assets/img/insta-icon.svg";
import fbIcon from "../../../assets/img/fb-icon.svg";
import linkedinIcon from "../../../assets/img/linkedin.svg";
import arrow from "../../../assets/img/arrow-left.svg";

import navData from "./navData.json";
import { navStateAction } from "../../../store/NavState";
import { themeStateAction } from "../../../store/themeState";
import { useGlobalDispatchContext } from "../../../context/globalContext";

const Nav = () => {
  const [touchPos, setTouchPos] = useState(0);
  const isNavActive = useSelector((state) => state.navState.isActive);
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );
  const cursorDispatch = useGlobalDispatchContext();
  const dispatch = useDispatch();
  const navRef = useRef();
  const swipwTextRef = useRef();

  useEffect(() => {
    if (isNavActive) {
      document.querySelector("body").style.overflowY = "hidden";
    }
    return () => {
      document.querySelector("body").style.overflowY = "scroll";
    };
  }, [isNavActive]);

  // Mobile Theme Swipe
  // useEffect(() => {
  //   navRef.current.addEventListener("touchstart", handleTouchStart, false);
  //   navRef.current.addEventListener("touchmove", handleTouchMove, false);

  //   var xDown = null;
  //   var yDown = null;

  //   function getTouches(evt) {
  //     return evt.touches || evt.originalEvent.touches;
  //   }

  //   function handleTouchStart(evt) {
  //     const firstTouch = getTouches(evt)[0];
  //     xDown = firstTouch.clientX;
  //     yDown = firstTouch.clientY;
  //   }

  //   function handleTouchMove(evt) {
  //     if (!xDown || !yDown) {
  //       return;
  //     }

  //     var xUp = evt.touches[0].clientX;
  //     var yUp = evt.touches[0].clientY;

  //     var xDiff = xDown - xUp;
  //     var yDiff = yDown - yUp;

  //     if (Math.abs(xDiff) > Math.abs(yDiff)) {
  //       /*most significant*/

  //       if (xDiff > 0) {
  //         if (isLightThemeActive) {
  //           swipwTextRef.current.innerText = "Swipe for Dark mode";
  //         } else {
  //           swipwTextRef.current.innerText = "Swipe for light mode";
  //         }
  //       } else {
  //         /* left swipe */
  //         // alert("right");
  //       }
  //     }
  //     xDown = null;
  //     yDown = null;
  //   }
  // }, [dispatch, isLightThemeActive]);

  // Theme Toggle
  useEffect(() => {
    if (isLightThemeActive) {
      localStorage.setItem("updotThemePreference", "Light");
    } else {
      localStorage.setItem("updotThemePreference", "dark");
    }
  }, [isLightThemeActive]);

  const desktopThemeTogglerHandler = () => {
    dispatch(themeStateAction.toggleTheme());
    dispatch(navStateAction.toggleNav());
  };

  const handleGesture = (e) => {
    if (touchPos - e.changedTouches[0].clientX > 10) {
      dispatch(themeStateAction.toggleTheme());
      setTouchPos(0);
    }
  };
  return (
    <div
      ref={navRef}
      onMouseEnter={() => cursorDispatch("hovered")}
      onMouseLeave={() => cursorDispatch("cursor-main")}
      className={`${classes["navbar"]} ${
        isNavActive ? classes["navbar-show"] : classes["navbar-hide"]
      } ${isLightThemeActive && classes["navbar-bg-slide"]}`}
      onClick={() =>
        window.innerWidth < 800 ? null : dispatch(navStateAction.toggleNav())
      }
    >
      <ul className={classes["nav-container"]}>
        {navData.map((navItem, index) => (
          <li
            key={index}
            onMouseEnter={() => cursorDispatch("cursor-main")}
            onMouseLeave={() => cursorDispatch("hovered")}
          >
            <NavLink
              to={`${navItem.link}`}
              activeClassName={classes["active-nav"]}
              onClick={() =>
                window.innerWidth < 800
                  ? null
                  : dispatch(navStateAction.toggleNav())
              }
            >
              {navItem.name}
            </NavLink>
            {navItem.subNav.length > 0 && (
              <div className={classes["sub-nav"]}>
                {navItem.subNav.map((el, i) => (
                  <Link
                    key={i}
                    to={`${el.link}`}
                    // onClick={() => dispatch(navStateAction.toggleNav())}
                  >
                    {el.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div
        className={classes["theme-toggler-desktop"]}
        onMouseEnter={() => cursorDispatch("cursor-main")}
        onMouseLeave={() => cursorDispatch("hovered")}
        onClick={desktopThemeTogglerHandler}
      >
        <div className={classes["theme-toggler"]}></div>
      </div>
      <div
        onTouchStart={(event) => setTouchPos(event.touches[0].clientX)}
        onTouchMove={(e) => handleGesture(e)}
        className={classes["swipe-text-container"]}
      >
        <p>
          <span ref={swipwTextRef}>
            {isLightThemeActive
              ? "Swipe for dark mode"
              : "Swipe for light mode"}
          </span>{" "}
          <img src={arrow} alt="arrow" />
        </p>
      </div>
      <ul className={classes["social-container"]}>
        <li>
          <a
            href="https://www.linkedin.com/company/updot/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => cursorDispatch("cursor-main")}
            onMouseLeave={() => cursorDispatch("hovered")}
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/updotofficial/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => cursorDispatch("cursor-main")}
            onMouseLeave={() => cursorDispatch("hovered")}
          >
            <img src={instaIcon} alt="instagram icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/updotofficial"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => cursorDispatch("cursor-main")}
            onMouseLeave={() => cursorDispatch("hovered")}
          >
            <img src={fbIcon} alt="facebook icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
