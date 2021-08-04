import classes from "./SectionHeading.module.css";
const SectionHeading = (props) => {
  return <h3 className={classes.heading}>{props.children}</h3>;
};

export default SectionHeading;
