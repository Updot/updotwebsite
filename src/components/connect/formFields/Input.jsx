import { useEffect, useRef, useState } from "react";
import classes from "./Input.module.scss";

const Input = (props) => {
  const inputRef = useRef(null);
  const labelRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [showAdorn, setShowAdorn] = useState(false);

  const onChangeHandler = (e) => {
    if (props.onFirstChange) {
      props.onFirstChange();
    }
    setInputValue(e.target.value);
  };
  useEffect(() => {
    if (inputValue.trim().length > 0 || props.preLoadValue?.trim().length > 0) {
      labelRef.current.classList.add(`${classes["change-label"]}`);
      inputRef.current.classList.add(`${classes["change-inputBg"]}`);
      setShowAdorn(true);
    } else {
      labelRef.current.classList.remove(`${classes["change-label"]}`);
      inputRef.current.classList.remove(`${classes["change-inputBg"]}`);
      setShowAdorn(false);
    }
  }, [inputValue]);
  return (
    <div className={classes["input-container"]}>
      <input
        id={props.fieldName}
        className={classes.input}
        type={props.type}
        {...props.register(`${props.fieldName}`, { required: props.required })}
        onChange={onChangeHandler}
        value={props.preLoadValue ? props.preLoadValue : inputValue}
        ref={inputRef}
        autoComplete={props.autoComplete}
        size={props.size}
        maxlength={props.maxlength}
        style={props.inputStyle}
      />
      <span className={classes["input-span"]}></span>
      <span
        style={{
          opacity: showAdorn ? "100%" : "0%",
          left: "14%",
          position: "absolute",
          color: "#000",
          fontSize: "4rem",
          top: "10%",
        }}
      >
        {props.adornment}
      </span>
      <label
        ref={labelRef}
        htmlFor={props.fieldName}
        style={{ left: props.left ? props.left : "4%" }}
      >
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;
