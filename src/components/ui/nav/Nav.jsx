import React, { useRef, useImperativeHandle } from "react";
import { NavLink } from "react-router-dom";
import navData from "./navData.json";

import SubNav from "./subNav/SubNav";

import instaIcon from "../../../assets/img/insta-icon.svg";
import fbIcon from "../../../assets/img/fb-icon.svg";
import linkedinIcon from "../../../assets/img/linkedin.svg";
import classes from "./Nav.module.css";

const Nav = React.forwardRef((props, ref) => {
  const setSubNavHeight = (childCount, subNavName, height) => {
    const subNav = document.querySelector(`[data-sub-nav="${subNavName}"]`);
    subNav.style.height = `${childCount * height}px`;
  };
  const onMouseOverHandler = (childCount, subNavName, event) => {
    setSubNavHeight(childCount, subNavName, 32);
    // props.showDot();
    // navRef.current.style.transform = "translateY(-60%)";
  };
  const onMouseOutHandler = (childCount, subNavName, event) => {
    // navRef.current.style.transform = "translateY(-13%)";
    setSubNavHeight(childCount, subNavName, 0);
    // props.hideDot();
  };
  return (
    <div className={classes["nav-container"]}>
      <div className={classes["nav-outer"]}>
        <nav ref={ref} data-type="nav-item" className={classes.nav}>
          {navData.map((data) => (
            <div
              key={data.name}
              data-type="nav-item"
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
                activeClassName={classes["nav-item-active"]}
                onClick={props.onNavBtnClick}
                // onMouseOver={() => props.showDot()}
                // onMouseOut={() => props.hideDot()}
              >
                {data.name}
              </NavLink>
              <SubNav subNavName={data.name} subNav={data.subNav} />
            </div>
          ))}
        </nav>
      </div>

      <div className={classes.socials}>
        <a
          href="https://www.linkedin.com/company/updot/"
          onMouseOver={() => props.showDot()}
          onMouseOut={() => props.hideDot()}
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>
        <a
          href="https://www.instagram.com/updotofficial/"
          onMouseOver={() => props.showDot()}
          onMouseOut={() => props.hideDot()}
          target="_blank"
          rel="noreferrer"
        >
          <img src={instaIcon} alt="instagram icon" />
        </a>
        <a
          href="https://www.facebook.com/updotofficial"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => props.showDot()}
          onMouseOut={() => props.hideDot()}
        >
          <img src={fbIcon} alt="facebook icon" />
        </a>
      </div>
    </div>
  );
});

export default Nav;
