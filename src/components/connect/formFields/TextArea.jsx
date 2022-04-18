import { useEffect, useRef } from "react";
import classes from "./Input.module.scss";
import { useSelector } from "react-redux";

const TextArea = (props) => {
  const inputRef = useRef(null);
  const labelRef = useRef(null);

  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );

  useEffect(() => {
    if (props.value.trim().length > 0) {
      labelRef.current.classList.add(`${classes["change-label"]}`);
      inputRef.current.classList.add(`${classes["change-inputBg"]}`);
    } else {
      labelRef.current.classList.remove(`${classes["change-label"]}`);
      inputRef.current.classList.remove(`${classes["change-inputBg"]}`);
    }
  }, [props.value]);
  return (
    <div className={classes["input-container"]}>
      <textarea
        id={props.fieldName}
        className={classes.input}
        // {...props.register(`${props.fieldName}`, { required: true })}
        onChange={(e) => props.handleChange(e.target.value)}
        value={props.value}
        ref={inputRef}
        style={{
          backgroundColor: isLightThemeActive ? "#ECECEC" : "#1d1d1d",
          color: isLightThemeActive ? "#000" : "#fff",
          height: props.height ? `${props.height}rem` : "",
        }}
      />
      <span className={classes["input-span"]}></span>
      <label
        ref={labelRef}
        htmlFor={props.fieldName}
        style={{
          left: props.left ? props.left : "4%",
          color: isLightThemeActive ? "#000" : "#fff",
        }}
      >
        {props.placeholder}
      </label>
    </div>
  );
};

export default TextArea;
