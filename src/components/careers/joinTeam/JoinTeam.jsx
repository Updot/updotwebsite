import SectionHeading from "../../ui/SectionHeading";
import classes from "./JoinTeam.module.css";
import Position from "./position/Position";
const JoinTeam = () => {
  return (
    <div className={`container ${classes["join"]}`}>
      <SectionHeading>Join Our Team?</SectionHeading>
      <Position />
    </div>
  );
};

export default JoinTeam;
