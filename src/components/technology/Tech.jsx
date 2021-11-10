import { useEffect, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import TechNav from "./techNav/TechNav";

import classes from "./Tech.module.css";
import Icons from "./techIcons/Icons";
const Tech = (props) => {
  const [servicesData, setServicesData] = useState("");

  useEffect(() => {
    if (props.services) {
      const data = props.services[0];
      setServicesData(data);
    }
  }, [props.services]);
  const navHandler = (item) => {
    const data = props.services.filter((service) => service.slug === item)[0];
    setServicesData(data);
  };

  return (
    <div className={classes.tech}>
      <SectionHeading>Technologies Escorting Us</SectionHeading>
      <div className={classes["tech-container"]}>
        <div className={classes["tech-icon-container"]}>
          <Icons techs={servicesData.techs} />
        </div>
        <div className={classes["tech-nav-container"]}>
          <TechNav onNavClick={navHandler} navData={props.services} />
        </div>
      </div>
    </div>
  );
};

export default Tech;
