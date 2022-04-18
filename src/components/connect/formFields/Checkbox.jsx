import React from "react";
import classes from "./Checkbox.module.scss";
import { useSelector } from "react-redux";

const Checkbox = (props) => {
  const { formState, setFormState } = props;
  const { services } = formState;

  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );

  const handleCheckBox = (item, isChecked) => {
    const newServices = [...services];
    const index = newServices.indexOf(item);
    if (isChecked) {
      newServices.push(item);
    } else {
      newServices.splice(index, 1);
    }
    setFormState({ ...formState, services: newServices });
  };

  return (
    <div className={classes.checkbox}>
      {props.data.map((item, index) => (
        <div
          key={item}
          className={
            isLightThemeActive ? classes.options_light : classes.options_dark
          }
        >
          <input
            id={item}
            type="checkbox"
            name={props.name}
            value={item}
            hidden
            onChange={(e) => handleCheckBox(e.target.value, e.target.checked)}
          />
          <label
            htmlFor={item}
            // style={{
            //   backgroundColor: isLightThemeActive ? "#ECECEC" : "#1d1d1d",
            //   color: isLightThemeActive ? "#000" : "#fff",
            // }}
          >
            {item}
          </label>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
