import { useEffect, useRef } from "react";
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
  const isNavActive = useSelector((state) => state.navState.isActive);
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );
  const cursorDispatch = useGlobalDispatchContext();
  const dispatch = useDispatch();
  const navRef = useRef();
  const swipwTextRef = useRef();
  useEffect(() => {
    if (isLightThemeActive) {
      localStorage.setItem("updotThemePreference", "Light");
    } else {
      localStorage.setItem("updotThemePreference", "dark");
    }
  }, [isLightThemeActive]);

  const desktopThemeTogglerHandler = () => {
    dispatch(themeStateAction.toggleTheme());
  };
  return (
    <div
      ref={navRef}
      onMouseEnter={() => cursorDispatch("hovered")}
      onMouseLeave={() => cursorDispatch("cursor-main")}
      className={`${classes["navbar"]} ${
        isNavActive ? classes["navbar-show"] : classes["navbar-hide"]
      } ${isLightThemeActive && classes["navbar-bg-slide"]}`}
      onClick={() => dispatch(navStateAction.toggleNav())}
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
              // onClick={() => dispatch(navStateAction.toggleNav())}
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
      <div className={classes["swipe-text-container"]}>
        <p>
          <span ref={swipwTextRef}>Swipe</span> <img src={arrow} alt="arrow" />
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
