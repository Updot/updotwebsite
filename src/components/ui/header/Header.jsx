import { Fragment } from "react";

import { Link } from "react-router-dom";
import logo from "../../../assets/img/updot-logo.svg";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../../context/globalContext";
import classes from "./Header.module.scss";

const Header = (props) => {
  const { onCursor, onNav } = useGlobalDispatchContext();
  const { navOpen } = useGlobalStateContext();

  let navStyle = {};

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
            navOpen && onNav();
          }}
          onMouseEnter={() => onCursor("cursor-main")}
          onMouseLeave={onCursor}
        >
          <img src={logo} alt="updot logo" />
          {navOpen && <p>Home</p>}
        </Link>
        {window.innerWidth > 800 && !navOpen ? (
          <div className={classes["nav-button-wrapper"]}>
            <div
              data-name="nav-btn"
              className={classes["nav-btn"]}
              style={navStyle}
              onClick={() => onNav()}
            >
              <span className={`${navOpen}`}>&nbsp;</span>
              <span className={`${navOpen}`}>&nbsp;</span>
            </div>
          </div>
        ) : null}
        {window.innerWidth < 800 && (
          <div className={classes["nav-button-wrapper"]}>
            <div
              data-name="nav-btn"
              className={classes["nav-btn"]}
              style={navStyle}
              onClick={() => onNav()}
            >
              <span className={!navOpen ? `${navOpen}` : classes["rotate-top"]}>
                &nbsp;
              </span>
              <span className={!navOpen ? `${navOpen}` : classes["rotate-up"]}>
                &nbsp;
              </span>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Header;
