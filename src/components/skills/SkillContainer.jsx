import React, { useEffect, useRef } from "react";

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

const SKILLS_DATA = [
  {
    name: "Web Development",
    desc: "Your business is ready to go places with Updot’s top-notch web designs. Take your idea across all the top platforms the web has to offer.",
    img: webIcon,
  },
  {
    name: "App Development",
    desc: "Go from zero to the finest app you can have, in no time with our team. While we build the app, you just be ready to kick ass on the app store.",
    img: appIcon,
  },
  {
    name: "Chatbot Development",
    desc: "We have your back if you need an additional route for leads and acquisition. An all customised chatbot is no biggie at Updot.",
    img: chatBotIcon,
  },
  {
    name: "DevOps & Cloud",
    desc: "Tech made easy just for you. Experience the best DevOps and Cloud services like nowhere else with our team",
    img: cloudIcon,
  },
  {
    name: "UI/UX Design",
    desc: "Our designs are between business and art. Meet the best UI/UX designers at Updot to experience the most exceptional designs in the market.",
    img: uiIcon,
  },
  {
    name: "SEO",
    desc: "Turn the hectic process of ranking into a piece of cake with Updot. With our dedicated team, increase your visibility online and get your website amongst the top in the Google rankings.",
    img: seoIcon,
  },
  {
    name: "Branding",
    desc: "Let the world know your business presence with our team. Big ideas and creative designs for a lasting impression, exclusively for your brand",
    img: brandingIcon,
  },
  {
    name: "Business Analysis",
    desc: "Business analysis done right with Updot.We promise precise business data analysis and interpretation because your information needs impression.",
    img: puzzleIcon,
  },
  {
    name: "Digital Marketing",
    desc: "Turn clicks into customers with Updot. We deliver the marketing results you desire post an extensive research and planning. Come on, let’s pull the digital trigger together.",
    img: thumbIcon,
  },
  {
    name: "Maintenance and Upgrade",
    desc: "We drive profit to your doors. Maintain and upgrade your website like a pro with Updot.",
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
