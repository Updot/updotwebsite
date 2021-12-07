import { Fragment, useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ScrollDot from "./ScrollDot";
import SkillContainer from "./SkillContainer";

import classes from "./Skills.module.scss";

let count = 0;
const Skills = () => {
  const [scrollDir, setScrollDir] = useState("bottom");
  const [scrollDotCount, setScrollDotCount] = useState(0);
  const skillRef = useRef(null);
  const ghostRef = useRef(null);
  const scrollTop = () => {
    window.scrollTo(0, window.innerHeight * 1);
    count = 0;
    const el = document.querySelector(`[data-type="skill-container"]`);
    skillRef.current.style.transition = `all 0.8s linear`;
    skillRef.current.style.left = `-${Math.round(el.clientWidth * count)}px`;
  };
  const scrollBottom = () => {
    const el = document.querySelector(`[data-type="skill-container"]`);
    const scroll = el.clientWidth * 9.4 + window.innerHeight * 2;
    window.scrollTo(0, scroll);
    count = 9;
    skillRef.current.style.transition = `all 0.8s linear`;
    skillRef.current.style.left = `-${Math.round(el.clientWidth * count)}px`;
  };
  useEffect(() => {
    let timeout;
    window.addEventListener("wheel", (e) => {
      if (window.innerWidth > 800) {
        clearTimeout(timeout);
        let scroll = window.scrollY - window.innerHeight * 2;
        if (skillRef.current) {
          if (window.scrollY < window.innerHeight * 2) {
            // skillRef.current.style.position = "unset";
          }
          if (scroll >= 0) {
            // skillRef.current.style.position = "fixed";
            if (scroll <= skillRef.current.scrollWidth - window.innerWidth) {
              // skillRef.current.style.top = "0px";
              // document.querySelector("body").style.overflowY = "hidden";
              const el = document.querySelector(
                `[data-type="skill-container"]`
              );
              // skillRef.current.style.left = `-${Math.round(scroll)}px`;

              // skillRef.current.style.scrollBehavior = `smooth`;
              timeout = setTimeout(() => {
                if (e.deltaY > 0) {
                  setScrollDir("bottom");
                  if (count < 9) {
                    // skillRef.current.style.transition = `all 0.8s linear`;
                    count += 1;
                    window.scrollTo(
                      0,
                      el.clientWidth * count + window.innerHeight * 2
                    );
                  } else {
                    // skillRef.current.style.transition = `unset`;
                  }
                } else {
                  setScrollDir("up");
                  if (count > 0) {
                    count -= 1;
                    const scroll =
                      el.clientWidth * count + window.innerHeight * 2;
                    window.scrollTo(0, scroll);
                  } else {
                    // skillRef.current.style.transition = `unset`;
                  }
                }
                skillRef.current.style.transition = `all 0.8s linear`;
                skillRef.current.style.transform = `translateX(-${Math.round(
                  el.clientWidth * count
                )}px)`;
                // skillRef.current.style.left = `-${Math.round(
                //   el.clientWidth * count
                // )}px`;
              }, 50);
            }
            if (scroll > skillRef.current.scrollWidth - window.innerWidth) {
              skillRef.current.style.top = `-${
                scroll - skillRef.current.scrollWidth + window.innerWidth
              }px`;
              skillRef.current.style.transition = `unset`;
            }
          }
        }
      }
    });
  }, []);

  const setScrollDot = (skillNum) => {
    setScrollDotCount(skillNum);
  };

  return (
    <Fragment>
      <div className={classes["heading-container-mobile"]}>
        {window.innerWidth < 800 && (
          <SectionHeading>Our Mastered Skills</SectionHeading>
        )}
      </div>
      <div ref={ghostRef} className={classes["ghost"]}>
        <div className={classes.skills}>
          <div ref={skillRef} className={classes["skills-outer"]}>
            <SkillContainer
              scrollDir={scrollDir}
              scrollTop={scrollTop}
              scrollBottom={scrollBottom}
              setScrollDot={setScrollDot}
            />
          </div>
        </div>
        {window.innerWidth < 800 && (
          <div className={classes["navigator"]}>
            <ScrollDot scrollDotCount={scrollDotCount} />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Skills;
