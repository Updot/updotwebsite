import { Fragment, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ScrollDot from "./ScrollDot";
import SkillContainer from "./SkillContainer";

import classes from "./Skills.module.scss";

const Skills = () => {
  const [scrollDir, setScrollDir] = useState("bottom");
  const [scrollDotCount, setScrollDotCount] = useState(0);

  const ghostRef = useRef(null);

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
          <div className={classes["skills-outer"]}>
            <SkillContainer scrollDir={scrollDir} setScrollDot={setScrollDot} />
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
