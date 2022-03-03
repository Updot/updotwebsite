import { Fragment, useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ScrollDot from "./ScrollDot";
import SkillContainer from "./SkillContainer";

import classes from "./Skills.module.scss";

let count = 0;
const Skills = () => {
  const [scrollDir, setScrollDir] = useState("bottom");
  const [scrollDotCount, setScrollDotCount] = useState(0);
  const [parent, setParent] = useState(null);

  const skillRef = useRef(null);
  const ghostRef = useRef(null);

  useEffect(() => {
    if (skillRef.current) {
      setParent(skillRef.current);
    }
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
          <div className={classes["skills-outer"]} ref={skillRef}>
            <SkillContainer
              scrollDir={scrollDir}
              setScrollDot={setScrollDot}
              parent={parent}
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
