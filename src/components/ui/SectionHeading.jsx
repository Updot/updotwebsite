import classes from "./SectionHeading.module.scss";
const SectionHeading = (props) => {
  return (
    <h2
      className={classes.heading}
      style={{
        fontSize:
          window.innerWidth <= 800 ? "4.2rem" : `${props.size || "7rem"}`,
      }}
    >
      {props.children}
    </h2>
  );
};

export default SectionHeading;
