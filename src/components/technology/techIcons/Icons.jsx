import { Fragment } from "react";
import Icon from "./Icon";

// import classes from "./Icon.module.css";
const Icons = (props) => {
  return (
    <Fragment>
      {props.techs &&
        props.techs.map((tech, i) => <Icon tech={tech} key={i} index={i} />)}
    </Fragment>
  );
};

export default Icons;
