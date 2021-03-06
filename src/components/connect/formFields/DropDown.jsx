import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import dArrowWhite from "../../../assets/img/d-arrow-white.svg";
import dArrowDark from "../../../assets/img/d-arrow-dark.svg";
import classes from "./DropDown.module.scss";

const DropDown = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const dropdownOptionsRef = useRef(null);
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );

  useEffect(() => {
    const eventHandler = (e) => {
      if (isExpanded) setIsExpanded(false);
    };
    document.addEventListener("click", eventHandler);
    return () => document.removeEventListener("click", eventHandler);
  }, [isExpanded]);

  const onDropDownClickHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    if (props.defaultValue) setDropdownValue(props.defaultValue);
  }, [props.defaultValue]);
  const onOptionClickHanlder = (val) => {
    setDropdownValue(val);
    props.handleChange(val);
  };

  let dropdownOptionClass = isExpanded
    ? `${classes["dropdown-options"]}`
    : `${classes["dropdown-options"]} ${classes["dropdown-outer-hide"]}`;

  const dArrow = isLightThemeActive ? dArrowWhite : dArrowDark;

  return (
    <div className={classes.dropdown} onClick={onDropDownClickHandler}>
      <fieldset
        style={{
          backgroundColor: isLightThemeActive ? "#ECECEC" : "#1d1d1d",
          color: isLightThemeActive ? "#000" : "#fff",
        }}
      >
        <input
          className={classes["dropdown-info"]}
          placeholder={props.placeholder}
          defaultValue={dropdownValue}
          style={{
            color: isLightThemeActive ? "#000" : "#fff",
          }}
        />
        <img
          src={dArrow}
          alt="down arrow"
          style={{
            filter: isLightThemeActive ? "invert(1)" : "invert(0)",
          }}
        />
      </fieldset>
      <div
        ref={dropdownOptionsRef}
        className={classes["dropdown-outer"]}
        style={{
          backgroundColor: isLightThemeActive ? "#ECECEC" : "#1d1d1d",
          color: isLightThemeActive ? "#000" : "#fff",
        }}
      >
        <div className={dropdownOptionClass}>
          {props.data.map((dd) => (
            <span
              key={Math.random() * 100}
              className={classes["option"]}
              onClick={onOptionClickHanlder.bind(null, dd)}
              style={{
                backgroundColor: isLightThemeActive ? "#ECECEC" : "#1d1d1d",
                color: isLightThemeActive ? "#000" : "#fff",
              }}
            >
              {dd}
              <hr
                style={{
                  backgroundColor: isLightThemeActive ? "#000" : "#fff",
                }}
                className={classes["btm-brdr"]}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
