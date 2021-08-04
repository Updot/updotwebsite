import Skill from "./Skill";
import SectionHeading from "../ui/SectionHeading";
import classes from "./SkillContainer.module.css";

import webIcon from "../../assets/img/skills/webdev-icon.svg";
import appIcon from "../../assets/img/skills/appdev-icon.svg";
import chatBotIcon from "../../assets/img/skills/chatbot-icon.svg";
import cloudIcon from "../../assets/img/skills/cloud-icon.svg";
import uiIcon from "../../assets/img/skills/ui-icon.svg";
import seoIcon from "../../assets/img/skills/seo-icon.svg";
import brandingIcon from "../../assets/img/skills/branding-icon.svg";
import dmIcon from "../../assets/img/skills/dm-icon.svg";

const SKILLS_DATA = [
  {
    name: "Web Development",
    desc: "We design and develop top-notch websites according to your requirements and ideas. Take your idea across all top platforms the web has to offer.",
    img: webIcon,
  },
  {
    name: "App Development",
    desc: "Looking ahead to the future? Apps might be your best bet. Get your app developed on the latest technology with our team.",
    img: appIcon,
  },
  {
    name: "Chatbot Development",
    desc: "Need an additional route for leads and acquisition? Why not invest in a customized chatbot for your business.",
    img: chatBotIcon,
  },
  {
    name: "DevOps & Cloud",
    desc: "Need an additional route for leads and acquisition? Why not invest in a customized chatbot for your business.",
    img: cloudIcon,
  },
  {
    name: "UI/UX Design",
    desc: "Need an additional route for leads and acquisition? Why not invest in a customized chatbot for your business.",
    img: uiIcon,
  },
  {
    name: "SEO",
    desc: "We know how tough it is to rank for keywords you wish for. With our dedicated team, get your website amongst the top in Google rankings.",
    img: seoIcon,
  },
  {
    name: "Branding",
    desc: "Started off a new business and need to let people know of your presence? We are the right team for the job as we cover everything from Logo, Graphics and brochures.",
    img: brandingIcon,
  },
  {
    name: "Digital Marketing",
    desc: "Looking to promote your brand across the nation? We have you covered. After extensive research and planning, we’ll present the best possible strategy to boost your digital presence.",
    img: dmIcon,
  },
];

const SkillContainer = () => {
  return (
    <div className={classes["skills-inner-cotnainer"]}>
      {SKILLS_DATA.map((skill) => (
        <div key={skill.name} className={classes["skill-inner"]}>
          <SectionHeading>Our Mastered Skills</SectionHeading>
          <Skill skillData={skill} />
        </div>
      ))}
    </div>
  );
};

export default SkillContainer;
