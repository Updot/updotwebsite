import { useRef, useEffect, useState } from "react";
import ScrollDot from "./ScrollDot";
import ScrollTrigger from "gsap/ScrollTrigger";
import Skill from "./Skill";
import classes from "./Skills.module.scss";
import SectionHeading from "../ui/SectionHeading";
import gsap from "gsap";

import webIcon from "../../assets/img/lottiefiles/pointer.json";
import appIcon from "../../assets/img/lottiefiles/androidapple.json";
import chatBotIcon from "../../assets/img/lottiefiles/chatbot.json";
import cloudIcon from "../../assets/img/lottiefiles/cloud.json";
import uiIcon from "../../assets/img/lottiefiles/boxsq.json";
import seoIcon from "../../assets/img/lottiefiles/search.json";
import brandingIcon from "../../assets/img/lottiefiles/branding.json";
import puzzleIcon from "../../assets/img/lottiefiles/puzzle.json";
import loadingIcon from "../../assets/img/lottiefiles/loading.json";
import thumbIcon from "../../assets/img/lottiefiles/thumbsup.json";
// import upArrow from "../../assets/img/up-arrow.svg";

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const [scrollDotCount, setScrollDotCount] = useState(0);

  const skillsInnerRef = useRef();

  useEffect(() => {
    // skillsInnerRef.current.addEventListener("scroll", (e) => {
    //   props.setScrollDot(
    //     Math.floor(skillsInnerRef.current.scrollLeft / window.innerWidth)
    //   );
    // });
    // GSAP
    let sections = gsap.utils.toArray(skillsInnerRef.current.children);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: skillsInnerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => `+=${skillsInnerRef.current.offsetWidth}`,
      },
    });
  }, []);

  return (
    <div className={classes["skills-section"]}>
      <h2 className={classes["section-heading"]}>Our Mastered Skills</h2>
      <div className={classes["h-scroll-container"]}>
        <div className={classes["scroll-area"]} ref={skillsInnerRef}>
          {SkillData.map((item, index) => (
            <div className={classes["skill-container"]} key={index}>
              <SectionHeading>Our Mastered Skills</SectionHeading>
              <Skill lottie={item.img} skillData={item} />
            </div>
          ))}
        </div>
        <div className={classes["scroll-navigator"]}>
          <ScrollDot scrollDotCount={scrollDotCount} />
        </div>
      </div>
    </div>
  );
};

export default Skills;

const SkillData = [
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
