import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";
// import SubNav from "./subNav/SubNav";
import instaIcon from "../../../assets/img/insta-icon.svg";
import fbIcon from "../../../assets/img/fb-icon.svg";
import linkedinIcon from "../../../assets/img/linkedin.svg";
import arrow from "../../../assets/img/arrow-left.svg";
import gsap from "gsap";
import navData from "./navData.json";

import { themeStateAction } from "../../../store/themeState";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../../context/globalContext";

const Nav = () => {
  const [touchPos, setTouchPos] = useState(0);
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );
  const { onCursor, onNav } = useGlobalDispatchContext();
  const { navOpen } = useGlobalStateContext();

  const dispatch = useDispatch();
  const navRef = useRef();
  const swipwTextRef = useRef();

  useEffect(() => {
    let nav = navRef.current;
    const tl = gsap.timeline();

    if (navOpen) {
      document.querySelector("body").style.overflowY = "hidden";
      tl.to(nav, {
        duration: 1,
        css: {
          transform: "translate(0%, 0%)",
          display: "block",
        },
        ease: "elastic.out(1, 1)",
      }).from(".line-item", 0.2, {
        y: 100,
        css: {
          opacity: 0,
        },
        delay: -0.8,
        stagger: 0.1,
        ease: "expo.out",
      });
    }
    return () => {
      document.querySelector("body").style.overflowY = "scroll";
      tl.to(nav, {
        duration: 1,
        css: {
          transform: "translate(101%, 0%)",
          display: "none",
        },
        ease: "power3.inOut",
      });
    };
  }, [navOpen]);

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
    onNav();
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
      onMouseEnter={() => onCursor("hovered")}
      onMouseLeave={() => onCursor("cursor-main")}
      className={`${classes["navbar"]}      
      ${isLightThemeActive && classes["navbar-bg-slide"]}`}
      onClick={() => onNav()}
      style={{ display: "none", transform: "translate(101%, 0%)" }}
    >
      <ul className={classes["nav-container"]}>
        {navData.map((navItem, index) => (
          <li
            className="line-item"
            // style={{
            //   opacity: 0,
            // }}
            key={index}
            onMouseEnter={() => onCursor("cursor-main")}
            onMouseLeave={() => onCursor("hovered")}
          >
            <NavLink
              // onClick={() => (window.innerWidth < 800 ? null : onNav())}
              to={`${navItem.link}`}
              activeClassName={classes["active-nav"]}
            >
              {navItem.name}
            </NavLink>
            {navItem.subNav.length > 0 && (
              <div className={classes["sub-nav"]}>
                {navItem.subNav.map((el, i) => (
                  <Link
                    key={i}
                    to={`${el.link}`}
                    // onClick={() =>     onNav()}
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
        onMouseEnter={() => onCursor("cursor-main")}
        onMouseLeave={() => onCursor("hovered")}
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
            onMouseEnter={() => onCursor("cursor-main")}
            onMouseLeave={() => onCursor("hovered")}
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/updotofficial/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => onCursor("cursor-main")}
            onMouseLeave={() => onCursor("hovered")}
          >
            <img src={instaIcon} alt="instagram icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/updotofficial"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => onCursor("cursor-main")}
            onMouseLeave={() => onCursor("hovered")}
          >
            <img src={fbIcon} alt="facebook icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
