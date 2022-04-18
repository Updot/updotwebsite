import { useRef, useEffect, useState, useCallback } from "react";
import ScrollDot from "./ScrollDot";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Skill from "./Skill";
import classes from "./Skills.module.scss";
import SectionHeading from "../ui/SectionHeading";
import gsap from "gsap";
import useEmblaCarousel from "embla-carousel-react";

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
import { SlowMo } from "gsap/EasePack";

const Skills = () => {
  // Scrolling Animation
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SlowMo);
  gsap.registerPlugin(ScrollToPlugin);

  const skillsInnerRef = useRef();

  useEffect(() => {
    if (window.innerWidth > 800) {
      let sections = gsap.utils.toArray(skillsInnerRef.current.children);
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: skillsInnerRef.current,
          pin: true,
          scrub: 2,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => `+=${skillsInnerRef.current.offsetWidth}`,
        },
      });
      var scrollPos = 0;

      // adding scroll event
      window.addEventListener("scroll", function () {
        // detects new state and compares it with the new one
        if (document.getElementById("id-skills-section")) {
          if (document.body.getBoundingClientRect().top > scrollPos) {
            document
              .getElementById("id-skills-section")
              .setAttribute("data-direction", "UP");
          } else {
            document
              .getElementById("id-skills-section")
              .setAttribute("data-direction", "DOWN");
          }
        }
        // saves the new position for iteration.
        scrollPos = document.body.getBoundingClientRect().top;
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [skillsInnerRef]);

  const handleSkipScroll = () => {
    let targetArea = document.getElementById("id-skills-section");
    if (targetArea.dataset.direction === "UP") {
      gsap.to(window, { duration: 2, scrollTo: "#top-anchor" });
    } else if (targetArea.dataset.direction === "DOWN") {
      gsap.to(window, { duration: 2, scrollTo: "#bottom-anchor" });
    }
  };

  // Dragging the carousel
  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
    align: "center",
    skipSnap: false,
  });
  const [scrollDotCount, setScrollDotCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;

    setScrollDotCount(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (window.innerWidth < 800) {
      if (!embla) return;
      embla.on("select", onSelect);
      onSelect();
    }
  }, [embla, onSelect]);

  return (
    <>
      {/* Scroll */}
      <div
        className={classes["skills-section"]}
        data-direction="scroll"
        id="id-skills-section"
      >
        <div className={classes["h-scroll-container"]}>
          <div className={classes["scroll-area"]} ref={skillsInnerRef}>
            {SkillData.map((item, index) => (
              <div className={classes["skill-container"]} key={index}>
                <SectionHeading>Our Mastered Skills</SectionHeading>
                <Skill
                  lottie={item.img}
                  skillData={item}
                  handleSkipScroll={handleSkipScroll}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Draggable */}
      <div className={classes.embla}>
        <h2 className={classes["section-heading"]}>Our Mastered Skills</h2>
        <div className={classes["embla__viewport"]} ref={viewportRef}>
          <div className={classes["embla__container"]}>
            {SkillData.map((item, index) => (
              <div className={classes["embla__slide"]} key={index}>
                <Skill
                  className={classes["embla__slide__inner"]}
                  lottie={item.img}
                  skillData={item}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={classes["swiper-pagination"]}>
          <ScrollDot scrollDotCount={scrollDotCount} />
        </div>
      </div>
    </>
  );
};

export default Skills;

const SkillData = [
  {
    name: "Web Development",
    desc: "Your business is ready to go places with Updot’s top-notch web designs. Take your idea across all the top platforms the web has to offer.",
    img: webIcon,
    skip: false,
  },
  {
    name: "App Development",
    desc: "Go from zero to the finest app you can have, in no time with our team. While we build the app, you just be ready to kick ass on the app store.",
    img: appIcon,
    skip: false,
  },
  {
    name: "Chatbot Development",
    desc: "We have your back if you need an additional route for leads and acquisition. An all customised chatbot is no biggie at Updot.",
    img: chatBotIcon,
    skip: true,
  },
  {
    name: "DevOps & Cloud",
    desc: "Tech made easy just for you. Experience the best DevOps and Cloud services like nowhere else with our team",
    img: cloudIcon,
    skip: true,
  },
  {
    name: "UI/UX Design",
    desc: "Our designs are between business and art. Meet the best UI/UX designers at Updot to experience the most exceptional designs in the market.",
    img: uiIcon,
    skip: true,
  },
  {
    name: "SEO",
    desc: "Turn the hectic process of ranking into a piece of cake with Updot. With our dedicated team, increase your visibility online and get your website amongst the top in the Google rankings.",
    img: seoIcon,
    skip: true,
  },
  {
    name: "Branding",
    desc: "Let the world know your business presence with our team. Big ideas and creative designs for a lasting impression, exclusively for your brand",
    img: brandingIcon,
    skip: true,
  },
  {
    name: "Business Analysis",
    desc: "Business analysis done right with Updot.We promise precise business data analysis and interpretation because your information needs impression.",
    img: puzzleIcon,
    skip: true,
  },
  {
    name: "Digital Marketing",
    desc: "Turn clicks into customers with Updot. We deliver the marketing results you desire post an extensive research and planning. Come on, let’s pull the digital trigger together.",
    img: thumbIcon,
    skip: true,
  },
  {
    name: "Maintenance and Upgrade",
    desc: "We drive profit to your doors. Maintain and upgrade your website like a pro with Updot.",
    img: loadingIcon,
    skip: true,
  },
];
