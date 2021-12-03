import { Link } from "react-router-dom";
import updot from "../../assets/img/updot.svg";
import updotU from "../../assets/img/U.svg";

import classes from "./Error.module.css";

const Error = ({ isLightThemeActive }) => {
  let eggColor;

  if (isLightThemeActive) eggColor = "#000";
  else eggColor = "#fff";

  return (
    <div
      className={`container ${classes.error}`}
      style={isLightThemeActive ? { background: "#fff" } : {}}
    >
      <div className={classes["error-text-container"]}>
        <h2
          className={classes["error-heading"]}
          style={isLightThemeActive ? { color: "#000" } : {}}
        >
          Oops!!!
        </h2>
        <h3
          className={classes["error-text"]}
          style={isLightThemeActive ? { color: "#000" } : {}}
        >
          Page not found :(
        </h3>
      </div>
      <div className={classes["error-feature"]}>
        <div className={classes["error-image-container"]}>
          <img
            style={isLightThemeActive ? { filter: "invert(1)" } : {}}
            className={classes["updot-u"]}
            src={updotU}
            alt="updot u"
          />
          <div className={classes["dot-container"]}>
            <svg
              className={classes["egg-left"]}
              width="174"
              height="172"
              viewBox="0 0 174 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M113.998 152.844C95.6432 155.152 77.0886 150.517 61.9756 139.848C46.8626 129.18 36.2823 113.248 32.3112 95.1805C28.34 77.1126 31.2648 58.2129 40.5114 42.1905C49.7581 26.1681 64.6589 14.1798 82.2897 8.57854C83.0169 8.34732 83.7358 8.13281 84.4663 7.92478L108.146 28.6717L88.5931 59.863L111.466 79.1689L101.854 111.047L122.322 123.152L113.998 152.844Z"
                fill={eggColor}
              />
            </svg>
            <svg
              className={classes["egg-right"]}
              width="140"
              height="165"
              viewBox="0 0 140 165"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.2706 151.087C68.9859 152.515 64.5803 153.551 60.1083 154.183L68.0122 124.387L47.3791 112.566L56.5521 80.5578L33.4144 61.5696L52.539 30.1215L28.5736 9.72144C37.8699 6.74526 47.6624 5.63374 57.3893 6.45066C67.1161 7.26758 76.586 9.99685 85.2557 14.4819C93.9254 18.967 101.624 25.1196 107.911 32.5868C114.197 40.0541 118.948 48.689 121.889 57.9962C124.831 67.3035 125.907 77.1001 125.054 86.8238C124.201 96.5476 121.436 106.007 116.919 114.66C112.402 123.313 106.221 130.99 98.7308 137.248C91.2403 143.507 82.5879 148.226 73.2698 151.133L73.2706 151.087Z"
                fill={eggColor}
              />
            </svg>
          </div>
        </div>
        <div className={classes["error-redirect-link"]}>
          <Link
            style={isLightThemeActive ? { color: "#000" } : {}}
            className={classes["error-link"]}
            to="/"
          >
            Head TO{" "}
            <img
              style={isLightThemeActive ? { filter: "invert(1)" } : {}}
              src={updot}
              alt="updot"
            />{" "}
            ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
