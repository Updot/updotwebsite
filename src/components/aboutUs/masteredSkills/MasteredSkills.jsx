import { Link } from "react-router-dom";
import SectionHeading from "../../ui/SectionHeading";
import classes from "./MasteredSkills.module.scss";

const MasteredSkills = () => {
  return (
    <div className={`container ${classes["master-container"]}`}>
      <SectionHeading>Our Mastered Skills</SectionHeading>
      <div className={classes["skills-container"]}>
        <Link className={classes["skills-link"]} to="/">
          Web Development
        </Link>
        <Link className={classes["skills-link"]} to="/">
          App Development
        </Link>
        <Link className={classes["skills-link"]} to="/">
          Chatbot Development
        </Link>
        <Link className={classes["skills-link"]} to="/">
          DevOps & Cloud
        </Link>
        <Link className={classes["skills-link"]} to="/">
          UI/UX Design
        </Link>
        <Link className={classes["skills-link"]} to="/">
          SEO
        </Link>
        <Link className={classes["skills-link"]} to="/">
          Branding
        </Link>
        <Link className={classes["skills-link"]} to="/">
          Business Analysis
        </Link>
        <Link className={classes["skills-link"]} to="/">
          Digital Marketing
        </Link>
        <Link className={classes["skills-link"]} to="/">
          Maintenance and Upgrade
        </Link>
      </div>
    </div>
  );
};

export default MasteredSkills;
