import classes from "./SectionHeading.module.css";
const SectionHeading = (props) => {
  return (
    <h2 className={classes.heading} style={{ fontSize: props.size || "7rem" }}>
      {props.children}
    </h2>
  );
};

export default SectionHeading;
