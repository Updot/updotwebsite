import { useEffect, useRef, useState } from "react";
import classes from "./DropDown.module.css";

const DropDown = (props) => {
  const [isExpended, setIsExpended] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const dropdownOptionsRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.target.classList.contains(`${classes["dropdown-info"]}`)) {
        if (isExpended) {
          setIsExpended(false);
        }
      }
    });
  }, [isExpended]);
  const onDropDownClickHandler = () => {
    console.log(isExpended);
    setIsExpended((prevState) => !prevState);
  };
  const onOptionClickHanlder = (val, event) => {
    setDropdownValue(val);
    props.setValue(`${props.fieldName}`, val);
  };
  let dropdownOptionClass = isExpended
    ? `${classes["dropdown-options"]}`
    : `${classes["dropdown-options"]} ${classes["dropdown-options-hide"]}`;

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
      </fieldset>
      <div ref={dropdownOptionsRef} className={dropdownOptionClass}>
        {/* <span className={classes["option"]} data-value="none">
          {props.fieldName}
        </span> */}
        {props.data.map((dd) => (
          <span
            key={dd}
            className={classes["option"]}
            onClick={onOptionClickHanlder.bind(null, dd)}
          >
            {dd}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
