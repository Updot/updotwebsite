// import { useState } from "react";
import classes from "./Client.module.scss";
const Client = (props) => {
  return (
    <div className={`${classes.client} ${props.className}`}>
      {props.imgColor && <img src={props.imgColor} alt="client" />}
    </div>
  );
};

export default Client;
