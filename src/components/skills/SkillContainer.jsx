import Skill from "./Skill";
import SectionHeading from "../ui/SectionHeading";
import classes from "./SkillContainer.module.css";

import webIcon from "../../assets/img/lottiefiles/POINTER/pointer.json";
import appIcon from "../../assets/img/lottiefiles/thumbs.json";

import chatBotIcon from "../../assets/img/lottiefiles/boxsq.json";
import cloudIcon from "../../assets/img/lottiefiles/CLOUD/cloud.json";
import uiIcon from "../../assets/img/lottiefiles/PUZZLE/puzzle.json";
import seoIcon from "../../assets/img/lottiefiles/SEARCH/search.json";
import brandingIcon from "../../assets/img/lottiefiles/BRANDING/brand.json";
import dmIcon from "../../assets/img/lottiefiles/THUMBS/thumbs.json";

const SKILLS_DATA = [
  {
    name: "Web Development",
    desc: "We design and develop top-notch websites according to your requirements and ideas. Take your idea across all top platforms the web has to offer.",
    img: chatBotIcon,
  },
  {
    name: "App Development",
    desc: "Looking ahead to the future? Apps might be your best bet. Get your app developed on the latest technology with our team.",
    img: chatBotIcon,
  },
  {
    name: "Chatbot Development",
    desc: "Need an additional route for leads and acquisition? Why not invest in a customized chatbot for your business.",
    img: chatBotIcon,
  },
  {
    name: "DevOps & Cloud",
    desc: "Need an additional route for leads and acquisition? Why not invest in a customized chatbot for your business.",
    img: chatBotIcon,
  },
  {
    name: "UI/UX Design",
    desc: "Need an additional route for leads and acquisition? Why not invest in a customized chatbot for your business.",
    img: chatBotIcon,
  },
  {
    name: "SEO",
    desc: "We know how tough it is to rank for keywords you wish for. With our dedicated team, get your website amongst the top in Google rankings.",
    img: chatBotIcon,
  },
  {
    name: "Branding",
    desc: "Started off a new business and need to let people know of your presence? We are the right team for the job as we cover everything from Logo, Graphics and brochures.",
    img: chatBotIcon,
  },
  {
    name: "Business Analysis",
    desc: "Looking to promote your brand across the nation? We have you covered. After extensive research and planning, we’ll present the best possible strategy to boost your digital presence.",
    img: chatBotIcon,
  },
  {
    name: "Digital Marketing",
    desc: "Looking to promote your brand across the nation? We have you covered. After extensive research and planning, we’ll present the best possible strategy to boost your digital presence.",
    img: chatBotIcon,
  },
  {
    name: "Maintenance and Upgrade",
    desc: "Looking to promote your brand across the nation? We have you covered. After extensive research and planning, we’ll present the best possible strategy to boost your digital presence.",
    img: chatBotIcon,
  },
];

const SkillContainer = () => {
  return (
    <div className={classes["skills-inner-cotnainer"]}>
      {SKILLS_DATA.map((skill) => (
        <div
          key={skill.name}
          data-type="skill-container"
          className={classes["skill-inner"]}
        >
          {window.innerWidth > 800 && (
            <SectionHeading>Our Mastered Skills</SectionHeading>
          )}
          <Skill lottie={skill.img} skillData={skill} />
        </div>
      ))}
    </div>
  );
};

export default SkillContainer;
