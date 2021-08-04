import SectionHeading from "../ui/SectionHeading";
import AreaMap from "./AreaMap";
import AreaStates from "./AreaStates";

import classes from "./Area.module.css";

const Area = () => {
  return (
    <div className="container">
      <SectionHeading>Covered Area</SectionHeading>
      <div className={classes["area-inner"]}>
        <div className={classes["area-map-container"]}>
          <AreaMap />
        </div>
        <div className={classes["area-states-container"]}>
          <AreaStates />
        </div>
      </div>
    </div>
  );
};

export default Area;
