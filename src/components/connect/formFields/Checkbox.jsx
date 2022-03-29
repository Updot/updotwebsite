import React, { useCallback, useState, useEffect } from "react";
import classes from "./Checkbox.module.scss";
const Checkbox = (props) => {
  const { formState, setFormState } = props;
  const [servicesRequired, setServicesRequired] = useState([]);

  const handleCheckBox = (item) => {
    if (servicesRequired.includes(item.trim())) {
      setServicesRequired(servicesRequired.filter((i) => i !== item));
    } else {
      servicesRequired.push(item);
      setServicesRequired(servicesRequired);
    }
  };
  useEffect(() => {
    setFormState({ ...formState, servicesRequired });
  }, [servicesRequired]);

  return (
    <div className={classes.checkbox}>
      {props.data.map((item, index) => (
        <div key={item} className={classes.options}>
          <input
            id={item}
            type="checkbox"
            name={props.name}
            value={item}
            hidden
            // onChange={(e) => handleChange(e.target.value)}
          />
          <label
            onClick={() => handleCheckBox(item)}
            htmlFor={item}
            style={{ fontSize: props.size ? `${props.size}rem` : "2.6rem" }}
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
