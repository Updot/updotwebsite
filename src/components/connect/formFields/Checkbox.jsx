import React, { useCallback, useState, useEffect } from "react";
import classes from "./Checkbox.module.scss";

const Checkbox = (props) => {
  const { formState, setFormState } = props;
  const [services, setServices] = useState(formState.services);

  const handleCheckBox = useCallback(
    (id) => {
      const item = services[id];

      setServices((prevData) => {
        const newData = [...prevData];
        newData[id] = {
          ...item,
          checked: !item.checked,
        };
        return newData;
      });
    },
    [services]
  );
  useEffect(() => {
    setFormState({ ...formState, services });
  }, [services]);
  return (
    <div className={classes.checkbox}>
      {services.map((item, index) => (
        <div key={index} className={classes.options}>
          <input
            id={index}
            type="checkbox"
            name={props.name}
            value={item.checked}
            hidden
          />
          <label
            htmlFor={index}
            style={{ fontSize: props.size ? `${props.size}rem` : "2.6rem" }}
            onClick={() => handleCheckBox(index)}
          >
            {item.label}
          </label>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
