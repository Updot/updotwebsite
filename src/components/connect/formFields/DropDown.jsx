import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import dArrowWhite from "../../../assets/img/d-arrow-white.svg";
import dArrowDark from "../../../assets/img/d-arrow-dark.svg";
import classes from "./DropDown.module.css";

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

  const onOptionClickHanlder = (val, event) => {
    setDropdownValue(val);
    props.setValue(`${props.fieldName}`, val);
  };

  let dropdownOptionClass = isExpanded
    ? `${classes["dropdown-options"]}`
    : `${classes["dropdown-options"]} ${classes["dropdown-outer-hide"]}`;

  const dArrow = isLightThemeActive ? dArrowWhite : dArrowDark;

  return (
    <div className={classes.dropdown} onClick={onDropDownClickHandler}>
      <fieldset disabled>
        <input
          className={classes["dropdown-info"]}
          placeholder={props.placeholder}
          defaultValue={dropdownValue}
          {...props.register(`${props.fieldName}`, {
            required: props.required,
          })}
        />
        <img src={dArrow} alt="down arrow" />
      </fieldset>
      <div ref={dropdownOptionsRef} className={classes["dropdown-outer"]}>
        <div className={dropdownOptionClass}>
          {/* <span className={classes["option"]} data-value="none">
          {props.fieldName}
        </span> */}
          {props.data.map((dd) => (
            <span
              key={Math.random() * 100}
              className={classes["option"]}
              onClick={onOptionClickHanlder.bind(null, dd)}
            >
              {dd}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
