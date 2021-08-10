import React, { useRef, useImperativeHandle } from "react";
import { NavLink } from "react-router-dom";
import navData from "./navData.json";

import SubNav from "./subNav/SubNav";

import instaIcon from "../../../assets/img/insta-icon.svg";
import fbIcon from "../../../assets/img/fb-icon.svg";
import linkedinIcon from "../../../assets/img/linkedin.svg";
import classes from "./Nav.module.css";

const Nav = React.forwardRef((props, ref) => {
  const navRef = useRef();
  // const navElRef = useRef();
  const getNav = () => {
    return navRef.current;
  };
  useImperativeHandle(ref, () => {
    return {
      getNav,
    };
  });
  const setSubNavHeight = (childCount, subNavName, height) => {
    const subNav = document.querySelector(`[data-sub-nav="${subNavName}"]`);
    subNav.style.height = `${childCount * height}px`;
  };
  const onMouseOverHandler = (childCount, subNavName, event) => {
    setSubNavHeight(childCount, subNavName, 32);
    // navRef.current.style.transform = "translateY(-60%)";
  };
  const onMouseOutHandler = (childCount, subNavName, event) => {
    // navRef.current.style.transform = "translateY(-13%)";
    setSubNavHeight(childCount, subNavName, 0);
  };
  return (
    <div className={classes["nav-container"]}>
      <div className={classes["nav-outer"]}>
        <nav ref={navRef} className={classes.nav}>
          {navData.map((data) => (
            <div
              key={data.name}
              className={classes["nav-item-container"]}
              onMouseOver={onMouseOverHandler.bind(
                null,
                data.subNav.length,
                data.name
              )}
              onMouseOut={onMouseOutHandler.bind(
                null,
                data.subNav.length,
                data.name
              )}
            >
              <NavLink
                to={data.link}
                className={classes["nav-item"]}
                onClick={props.onNavBtnClick}
              >
                {data.name}
              </NavLink>
              <SubNav subNavName={data.name} subNav={data.subNav} />
            </div>
          ))}
        </nav>
      </div>

      <div className={classes.socials}>
        <a href="#1">
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>
        <a href="#1">
          <img src={instaIcon} alt="instagram icon" />
        </a>
        <a href="#1">
          <img src={fbIcon} alt="facebook icon" />
        </a>
      </div>
    </div>
  );
});

export default Nav;
