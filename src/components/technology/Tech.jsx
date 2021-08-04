import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import FrontEnd from "./techs/FrontEnd";
import TechNav from "./techNav/TechNav";

import classes from "./Tech.module.css";
const Tech = () => {
  const [showComponent, setShowComponent] = useState(<FrontEnd />);
  const navHandler = (item) => {
    switch (item) {
      case "frontend":
        setShowComponent(<FrontEnd />);
        break;

      default:
        break;
    }
  };

  return (
    <div className={classes.tech}>
      <SectionHeading>Technologies Escorting Us</SectionHeading>
      <div className={classes["tech-container"]}>
        <div className={classes["tech-icon-container"]}>{showComponent}</div>
        <div className={classes["tech-nav-container"]}>
          <TechNav onNavClick={navHandler} />
        </div>
      </div>
    </div>
  );
};

export default Tech;
