import React, { useRef, useImperativeHandle } from "react";

import instaIcon from "../../assets/img/insta-icon.svg";
import fbIcon from "../../assets/img/fb-icon.svg";
import linkedinIcon from "../../assets/img/linkedin.svg";
import classes from "./Nav.module.css";

const Nav = React.forwardRef((props, ref) => {
  const navRef = useRef();
  const navElRef = useRef();
  const getNav = () => {
    return navRef.current;
  };
  useImperativeHandle(ref, () => {
    return {
      getNav,
    };
  });
  const onMouseOverHandler = (event) => {
    const subElHeight = document.querySelector(
      `.${classes["sub-nav-item"]}`
    ).offsetHeight;
    const navElHeight = navElRef.current.offsetHeight;
    const el = event.target.parentNode.querySelector(`.${classes["sub-nav"]}`);
    const el2 = event.target.parentNode.parentNode.querySelector(
      `.${classes["sub-nav"]}`
    );
    if (el) {
      el.style.height = `${el.childElementCount * subElHeight + navElHeight}px`;
    } else {
      el2.style.height = `${
        el2.childElementCount * subElHeight + navElHeight
      }px`;
    }
  };
  const onMouseOutHandler = (event) => {
    const el = event.target.parentNode.querySelector(`.${classes["sub-nav"]}`);
    const el2 = event.target.parentNode.parentNode.querySelector(
      `.${classes["sub-nav"]}`
    );
    if (el) {
      el.style.height = `${0}px`;
    } else {
      el2.style.height = `${0}px`;
    }
  };
  return (
    <div className={classes["nav-container"]}>
      <div className={classes["nav-outer"]}>
        <nav ref={navRef} className={classes.nav}>
          <div className={classes["nav-item-container"]}>
            <a ref={navElRef} href="#work" className={classes["nav-item"]}>
              Home
            </a>
          </div>
          <div
            className={classes["nav-item-container"]}
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
          >
            <a href="#work" className={classes["nav-item"]}>
              Work
            </a>
            <div className={classes["sub-nav"]}>
              <a href="#1" className={classes["sub-nav-item"]}>
                Lorem Ipsum
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                loram Ipsum
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                loram Ipsumt
              </a>
            </div>
          </div>
          <div
            className={classes["nav-item-container"]}
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
          >
            <a href="#work" className={classes["nav-item"]}>
              Services
            </a>
            <div className={classes["sub-nav"]}>
              <a href="#1" className={classes["sub-nav-item"]}>
                Web Development
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                App Development
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                Chatbot Development
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                DevOps & Cloud
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                UI & UX Design
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                SEO
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                Branding
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                Digital Marketing
              </a>
            </div>
          </div>
          <div
            className={classes["nav-item-container"]}
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
          >
            <a href="#work" className={classes["nav-item"]}>
              Career
            </a>
            <div className={classes["sub-nav"]}>
              <a href="#1" className={classes["sub-nav-item"]}>
                Lorem Ipsum
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                loram Ipsum
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                loram Ipsumt
              </a>
            </div>
          </div>
          <div
            className={`${classes["nav-item-container"]} ${classes["insight"]}`}
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
          >
            <a href="#work" className={classes["nav-item"]}>
              Insight
            </a>
            <div className={classes["sub-nav"]}>
              <a href="#1" className={classes["sub-nav-item"]}>
                Lorem Ipsum
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                loram Ipsum
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                loram Ipsumt
              </a>
            </div>
          </div>
          <div
            className={`${classes["nav-item-container"]} ${classes["about"]}`}
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
          >
            <a href="#work" className={classes["nav-item"]}>
              About
            </a>
            <div className={classes["sub-nav"]}>
              <a href="#1" className={classes["sub-nav-item"]}>
                Lorem Ipsum
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                loram Ipsum
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                loram Ipsumt
              </a>
            </div>
          </div>
          <div
            className={`${classes["nav-item-container"]} ${classes["contact"]}`}
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
          >
            <a href="#work" className={classes["nav-item"]}>
              Contact
            </a>
            <div className={classes["sub-nav"]}>
              <a href="#1" className={classes["sub-nav-item"]}>
                Lorem Ipsum
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                loram Ipsum
              </a>
              <a href="#1" className={classes["sub-nav-item"]}>
                loram Ipsumt
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* <div className={classes["close-btn"]} onClick={props.onCloseClickHandler}>
        <img src={closeIcon} alt="icon" />
      </div> */}
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
