import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { mouseLocationAction } from "../../store/mouseLocation";
import classes from "./Header.module.css";
import logo from "../../../assets/img/updot-logo.svg";
const Header = React.forwardRef((props, ref) => {
  const isNavActive = useSelector((state) => state.navState.isActive);
  const navUpRef = useRef();
  const navBottomRef = useRef();
  const navBtn = useRef();

  const arrowCurrCords = useSelector(
    (state) => state.mouseLocation.currLocation
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (isNavActive) {
      const navEl = props.navRef.current.getNav();
      const navCord = navEl.getBoundingClientRect();
      const leftLoc = navCord.left;
      const topLoc = navCord.top - 50;
      const x = arrowCurrCords.x;
      const y = arrowCurrCords.y;
      if (
        (y > topLoc && x > leftLoc) ||
        (x < 150 && y < 300) ||
        (x > window.innerWidth - 400 && y > window.innerHeight - 100)
      ) {
        navBtn.current.classList.add(`${classes["nav-btn-hidden"]}`);
        document.querySelector("[data-arrow='mousearrow']").style.opacity = 1;
      } else {
        navBtn.current.classList.remove(`${classes["nav-btn-hidden"]}`);
        document.querySelector("[data-arrow='mousearrow']").style.opacity = 0;
      }
    } else {
      document.querySelector("[data-arrow='mousearrow']").style.opacity = 1;
    }
  }, [dispatch, arrowCurrCords, props.navRef, isNavActive]);
  const onClickHandler = (event) => {
    navUpRef.current.classList.toggle(`${classes["nav-btn-up-active"]}`);
    navBottomRef.current.classList.toggle(
      `${classes["nav-btn-bottom-active"]}`
    );
    event.target.classList.toggle(`${classes["nav-btn-container-fixed"]}`);

    props.onNavBtnClick();
  };
  const onHomeClickHandler = () => {
    navBtn.current.classList.remove(`${classes["nav-btn-container-fixed"]}`);
    navBtn.current.classList.remove(`${classes["nav-btn-hidden"]}`);
    navUpRef.current.classList.remove(`${classes["nav-btn-up-active"]}`);
    navBottomRef.current.classList.remove(
      `${classes["nav-btn-bottom-active"]}`
    );
    props.onNavCloseBtnClick();
  };
  const arrowLocation = isNavActive
    ? {
        left: `${arrowCurrCords.x}px`,
        top: `${arrowCurrCords.y}px`,
      }
    : {};
  return (
    <div className={classes.header}>
      <div className={classes["logo-container"]} onClick={onHomeClickHandler}>
        <Link to="/" className={classes["logo-inner"]}>
          <img ref={ref} className={classes.logo} src={logo} alt="Logo" />
        </Link>
        {isNavActive && <p>Home</p>}
      </div>
      {props.showNavBtn && (
        <div
          ref={navBtn}
          className={classes["nav-btn-container"]}
          style={arrowLocation}
          onClick={onClickHandler}
        >
          <span ref={navUpRef} className={classes["nav-btn-up"]}></span>
          <span ref={navBottomRef} className={classes["nav-btn-bottom"]}></span>
        </div>
      )}
    </div>
  );
});

export default Header;
