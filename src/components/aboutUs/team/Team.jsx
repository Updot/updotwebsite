import SectionHeading from "../../ui/SectionHeading";
import Member from "./member/Member";

import teamData from "./teamData.json";
import memberImg from "../../../assets/img/team-member.svg";
import linkedinIcon from "../../../assets/img/linkedin-icon-color.svg";

import classes from "./Team.module.css";

const Team = () => {
  return (
    <div className="container">
      <SectionHeading>Our Team</SectionHeading>
      <div className={classes["team-container"]}>
        {teamData.map((data) => (
          <Member
            key={Math.random() * 10000}
            memberImg={memberImg}
            linkedinIcon={linkedinIcon}
            data={data}
          />
        ))}
        <div className={classes["join-team"]}>
          <div className={classes["join-team-container"]}>
            <span className={classes["join-img-bg"]}></span>
            <img src={memberImg} alt="new member" />
          </div>
          <div className={classes["join-text"]}>
            <h4 className={classes["join"]}>Join Our Team?</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
