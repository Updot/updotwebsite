import { Fragment } from "react";
import CareerPara from "./careerPara/CareerPara";
import JoinTeam from "./joinTeam/JoinTeam";
import Life from "./life/Life";

const Careers = () => {
  return (
    <Fragment>
      <CareerPara />
      <JoinTeam />
      <Life />
    </Fragment>
  );
};

export default Careers;
