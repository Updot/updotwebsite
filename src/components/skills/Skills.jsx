import { Fragment, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import SkillContainer from "./SkillContainer";

import classes from "./Skills.module.css";

const Skills = () => {
  const skillRef = useRef(null);
  const ghostRef = useRef(null);
  useEffect(() => {
    let timeout;
    let count = 0;
    window.addEventListener("wheel", (e) => {
      if (window.innerWidth > 800) {
        clearTimeout(timeout);
        let scroll = window.scrollY - window.innerHeight * 2;
        if (skillRef.current) {
          if (window.scrollY < window.innerHeight * 2) {
            skillRef.current.style.position = "unset";
          }
          if (scroll >= 0) {
            skillRef.current.style.position = "fixed";
            if (scroll <= skillRef.current.scrollWidth - window.innerWidth) {
              skillRef.current.style.top = "0px";
              // document.querySelector("body").style.overflowY = "hidden";
              const el = document.querySelector(
                `[data-type="skill-container"]`
              );
              // skillRef.current.style.left = `-${Math.round(scroll)}px`;

              // skillRef.current.style.scrollBehavior = `smooth`;
              timeout = setTimeout(() => {
                if (e.deltaY > 0) {
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
                skillRef.current.style.left = `-${Math.round(
                  el.clientWidth * count
                )}px`;
              }, 100);
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
  return (
    <Fragment>
      <div className={classes["heading-container-mobile"]}>
        {window.innerWidth < 800 && (
          <SectionHeading>Our Mastered Skills</SectionHeading>
        )}
      </div>
      <div className={classes.skills}>
        <div ref={skillRef} className={classes["skills-outer"]}>
          <SkillContainer />
        </div>
      </div>
      {window.innerWidth < 800 && (
        <div className={classes["navigator"]}>
          <div className={`${classes["dot"]} ${classes["dot-active"]}`}></div>
          <div className={classes["dot"]}></div>
          <div className={classes["dot"]}></div>
          <div className={classes["dot"]}></div>
          <div className={classes["dot"]}></div>
          <div className={classes["dot"]}></div>
          <div className={classes["dot"]}></div>
          <div className={classes["dot"]}></div>
        </div>
      )}
      <div ref={ghostRef} className={classes["ghost"]}></div>
    </Fragment>
  );
};

export default Skills;
