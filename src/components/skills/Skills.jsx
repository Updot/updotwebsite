import { Fragment, useEffect, useRef } from "react";
import SkillContainer from "./SkillContainer";

import classes from "./Skills.module.css";

const Skills = () => {
  const skillRef = useRef(null);
  const ghostRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let scroll = window.scrollY - window.innerHeight;

      if (window.scrollY < window.innerHeight) {
        skillRef.current.style.position = "unset";
      }
      if (scroll >= 0) {
        skillRef.current.style.position = "fixed";
        if (scroll <= skillRef.current.scrollWidth - window.innerWidth) {
          skillRef.current.style.top = "0px";
          skillRef.current.style.left = `-${Math.round(scroll)}px`;
        }
        if (scroll > skillRef.current.scrollWidth - window.innerWidth) {
          skillRef.current.style.top = `-${
            scroll - skillRef.current.scrollWidth + window.innerWidth
          }px`;
        }
      }
    });
  });
  return (
    <Fragment>
      <div className={classes.skills}>
        <div ref={skillRef} className={classes["skills-outer"]}>
          <SkillContainer />
        </div>
      </div>
      <div ref={ghostRef} className={classes["ghost"]}></div>
    </Fragment>
  );
};

export default Skills;
