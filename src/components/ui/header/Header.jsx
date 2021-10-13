import React, {
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { mouseLocationAction } from "../../store/mouseLocation";
import { themeStateAction } from "../../../store/themeState";
import classes from "./Header.module.css";
import logo from "../../../assets/img/updot-logo.svg";

const Header = React.forwardRef((props, ref) => {
  const isNavActive = useSelector((state) => state.navState.isActive);
  const navUpRef = useRef();
  const navBottomRef = useRef();
  const logoRef = useRef();
  const toogleRef = useRef(null);
  const navBtn = useRef();

  const arrowCurrCords = useSelector(
    (state) => state.mouseLocation.currLocation
  );

  const dispatch = useDispatch();

  const toggleDot = useCallback(() => {
    if (isNavActive) {
      navBtn.current.classList.add(`${classes["nav-btn-hidden"]}`);
      document.querySelector("[data-arrow='mousearrow']").style.opacity = 1;
    }
  }, [isNavActive]);
  const toggleCross = useCallback(() => {
    if (isNavActive) {
      navBtn.current.classList.remove(`${classes["nav-btn-hidden"]}`);
      document.querySelector("[data-arrow='mousearrow']").style.opacity = 0;
    }
  }, [isNavActive]);
  useEffect(() => {
    if (isNavActive) {
      // const navEl = props.navRef.current.getNav();
      // const navCord = navEl.getBoundingClientRect();
      // const leftLoc = navCord.left;
      // const topLoc = navCord.top - 50;
      // const rightLoc = navCord.right;
      // const bottomLoc = navCord.bottom;
      // const x = arrowCurrCords.x;
      // const y = arrowCurrCords.y;
      // if (
      //   (y > topLoc && x > leftLoc && x <= rightLoc && y <= bottomLoc) ||
      //   (x < 150 && y < 300) ||
      //   (x > window.innerWidth - 400 && y > window.innerHeight - 100)
      // ) {
      //   toggleDot();
      // } else {
      //   toggleCross();
      // }
      toggleCross();
    } else {
      document.querySelector("[data-arrow='mousearrow']").style.opacity = 1;
    }
  }, [
    // dispatch,
    // arrowCurrCords,
    // props.navRef,
    isNavActive,
    toggleCross,
    // toggleDot,
  ]);

  useEffect(() => {
    if (isNavActive && props.navRef.current != null) {
      props.navRef.current.addEventListener("mouseover", (e) => {
        toggleDot();
      });
      props.navRef.current.addEventListener("mouseout", (e) => {
        toggleCross();
      });
    }
  }, [toggleCross, toggleDot, props.navRef, isNavActive]);

  useEffect(() => {
    const x = arrowCurrCords.x;
    const y = arrowCurrCords.y;
    const { x: togglerX, y: togglerY } =
      toogleRef.current.getBoundingClientRect();
    const el = document.querySelector("[data-arrow='mousearrow']");
    if (toogleRef.current) {
      if (
        x > togglerX - 20 &&
        x < togglerX + 20 &&
        y > togglerY - 20 &&
        y < togglerY + 20
      ) {
        el.style.left = `${togglerX + 2.5}px`;
        el.style.top = `${togglerY + 2}px`;
        if (window.innerWidth < 1300) {
          el.style.left = `${togglerX + 2}px`;
          el.style.top = `${togglerY + 2}px`;
        }
      } else {
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
      }
    }
  }, [arrowCurrCords]);

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
  const toggleThemeHandler = () => {
    dispatch(themeStateAction.toggleTheme());
  };

  const getLogo = () => {
    return logoRef.current;
  };

  useImperativeHandle(ref, () => {
    return { showDot: toggleDot, hideDot: toggleCross, getLogo };
  });
  return (
    <div className={classes.header}>
      <div
        className={classes["logo-container"]}
        onClick={onHomeClickHandler}
        onMouseOver={() => {
          toggleDot();
        }}
        onMouseOut={() => {
          toggleCross();
        }}
      >
        <Link to="/" className={classes["logo-inner"]}>
          <img ref={logoRef} className={classes.logo} src={logo} alt="Logo" />
        </Link>
        {isNavActive && <p>Home</p>}
      </div>
      <div
        data-type="toggle-btn"
        ref={toogleRef}
        className={classes["rest-dark-toggle"]}
        onClick={toggleThemeHandler}
        style={isNavActive ? { opacity: 0 } : {}}
      ></div>
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
