import { Link } from "react-router-dom";
import SectionHeading from "../../ui/SectionHeading";
import classes from "./MasteredSkills.module.scss";

const MasteredSkills = () => {
  return (
    <div className={`container ${classes["master-container"]}`}>
      <SectionHeading>Our Mastered Skills</SectionHeading>
      <div className={classes["skills-container"]}>
        <Link className={classes["skills-link"]} to="/services/web-development">
          Web Development
        </Link>
        <Link className={classes["skills-link"]} to="/services/app-development">
          App Development
        </Link>
        <Link
          className={classes["skills-link"]}
          to="/services/chatbot-development"
        >
          Chatbot Development
        </Link>
        <Link className={classes["skills-link"]} to="/services/devops-cloud">
          DevOps & Cloud
        </Link>
        <Link className={classes["skills-link"]} to="/services/ui-ux">
          UI/UX Design
        </Link>
        <Link className={classes["skills-link"]} to="/services/seo">
          SEO
        </Link>
        <Link className={classes["skills-link"]} to="/services/branding">
          Branding
        </Link>
        {/* <Link className={classes["skills-link"]} to="/">
          Business Analysis
        </Link> */}
        <Link
          className={classes["skills-link"]}
          to="/services/digital-marketing"
        >
          Digital Marketing
        </Link>
        <Link
          className={classes["skills-link"]}
          to="/services/maintenance-and-upgrade"
        >
          Maintenance and Upgrade
        </Link>
      </div>
    </div>
  );
};

export default MasteredSkills;
