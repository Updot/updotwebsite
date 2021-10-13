import Skill from "./Skill";
import SectionHeading from "../ui/SectionHeading";
import classes from "./SkillContainer.module.css";

import webIcon from "../../assets/img/lottiefiles/Pointer.json";
import appIcon from "../../assets/img/lottiefiles/androidapple.json";

import chatBotIcon from "../../assets/img/lottiefiles/chatbot.json";
import cloudIcon from "../../assets/img/lottiefiles/cloud.json";
import uiIcon from "../../assets/img/lottiefiles/boxsq.json";
import seoIcon from "../../assets/img/lottiefiles/search.json";
import brandingIcon from "../../assets/img/lottiefiles/branding.json";
import puzzleIcon from "../../assets/img/lottiefiles/puzzle.json";
import loadingIcon from "../../assets/img/lottiefiles/loading.json";
import thumbIcon from "../../assets/img/lottiefiles/thumbsup.json";
import upArrow from "../../assets/img/up-arrow.svg";
import { useEffect, useRef } from "react";

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
    name: "Business Analysis",
    desc: "Looking to promote your brand across the nation? We have you covered. After extensive research and planning, we’ll present the best possible strategy to boost your digital presence.",
    img: puzzleIcon,
  },
  {
    name: "Digital Marketing",
    desc: "Looking to promote your brand across the nation? We have you covered. After extensive research and planning, we’ll present the best possible strategy to boost your digital presence.",
    img: thumbIcon,
  },
  {
    name: "Maintenance and Upgrade",
    desc: "Looking to promote your brand across the nation? We have you covered. After extensive research and planning, we’ll present the best possible strategy to boost your digital presence.",
    img: loadingIcon,
  },
];

const SkillContainer = (props) => {
  const skillsInnerRef = useRef();
  useEffect(() => {
    skillsInnerRef.current.addEventListener("scroll", (e) => {
      props.setScrollDot(
        Math.floor(skillsInnerRef.current.scrollLeft / window.innerWidth)
      );
    });
  }, []);
  return (
    <div ref={skillsInnerRef} className={classes["skills-inner-cotnainer"]}>
      {SKILLS_DATA.map((skill, i) => (
        <div
          key={skill.name}
          data-type="skill-container"
          className={classes["skill-inner"]}
        >
          {window.innerWidth > 800 && (
            <SectionHeading>Our Mastered Skills</SectionHeading>
          )}
          <Skill lottie={skill.img} skillData={skill} />
          {window.innerWidth > 800 && i > 1 && i < 9 && (
            <div className={classes["arrow"]}>
              {props.scrollDir === "up" ? (
                <img src={upArrow} alt="arrow" onClick={props.scrollTop} />
              ) : (
                <img
                  src={upArrow}
                  alt="arrow"
                  className={classes["down-arrow"]}
                  onClick={props.scrollBottom}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillContainer;
