import SectionHeading from "../../ui/SectionHeading";
import Member from "./member/Member";

import teamData from "./teamData.json";
import joinTeamImg from "../../../assets/img/join-team.svg";

import classes from "./Team.module.css";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <SectionHeading>Our Team</SectionHeading>
      <div className={classes["team-container"]}>
        {teamData.map((data, index) => (
          <Member key={index} img={data.img || "Hritik"} data={data} />
        ))}
        <Link to="/careers" className={classes["join-team"]}>
          <div className={classes["join-team-container"]}>
            <span className={classes["join-img-bg"]}></span>
            <img src={joinTeamImg} alt="new member" />
          </div>
          <div className={classes["join-text"]}>
            <h4 className={classes["join"]}>Join Our Team?</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Team;
