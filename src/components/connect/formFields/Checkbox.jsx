import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <div className={classes.checkbox}>
      {props.data.map((checkboxData) => (
        <div key={checkboxData} className={classes.options}>
          <input
            id={checkboxData}
            type="checkbox"
            name={props.name}
            value={checkboxData}
            {...props.register(`${props.name}`)}
            hidden
          />
          <label htmlFor={checkboxData}>{checkboxData}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
