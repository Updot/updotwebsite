import { useEffect, useRef, useState } from "react";
import classes from "./Input.module.scss";

const Input = (props) => {
  const inputRef = useRef(null);
  const labelRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (e) => {
    if (props.onFirstChange) {
      props.onFirstChange();
    }
    setInputValue(e.target.value);
  };
  useEffect(() => {
    if (inputValue.trim().length > 0) {
      labelRef.current.classList.add(`${classes["change-label"]}`);
      inputRef.current.classList.add(`${classes["change-inputBg"]}`);
    } else {
      labelRef.current.classList.remove(`${classes["change-label"]}`);
      inputRef.current.classList.remove(`${classes["change-inputBg"]}`);
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
        value={inputValue}
        ref={inputRef}
      />
      <span className={classes["input-span"]}></span>
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
