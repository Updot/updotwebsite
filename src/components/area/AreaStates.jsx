import { useEffect, useRef, useState } from "react";
import classes from "./AreaStates.module.css";

const AreaStates = () => {
  const areaStateRef = useRef(null);
  const [projectCount, setProjectCount] = useState(0);
  const [bussinessRepeat, setBussinessRepeat] = useState(0);
  const [stateCount, setStateCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);

  useEffect(() => {
    const totalProjectCount = 13,
      totalBussinessRepeat = 80,
      totalStateCount = 8,
      totalTeamCount = 11;

    const onEntry = (entry) => {
      entry.forEach((change) => {
        if (change.isIntersecting) {
          let i = 0,
            j = 0,
            k = 0,
            l = 0;
          setInterval(() => {
            if (i !== totalProjectCount) {
              i++;
              setProjectCount(i);
            }
            if (j !== totalBussinessRepeat) {
              j++;
              setBussinessRepeat(j);
            }
            if (k !== totalStateCount) {
              k++;
              setStateCount(k);
            }
            if (l !== totalTeamCount) {
              l++;
              setTeamCount(l);
            }
          }, 100);
        }
      });
    };
    let options = {
      threshold: [0.8],
    };

    let observer = new IntersectionObserver(onEntry, options);
    observer.observe(areaStateRef.current);
  }, []);
  return (
    <div ref={areaStateRef} className={classes["area-states-inner"]}>
      <div className={classes["area-state"]}>
        <h3 className={classes["area-state-name"]}>Projects Done</h3>
        <p className={classes["area-state-count"]}>{`${projectCount}+`}</p>
      </div>
      <div className={classes["area-state"]}>
        <h3 className={classes["area-state-name"]}>Business Repeat</h3>
        <p className={classes["area-state-count"]}>{`${bussinessRepeat}%`}</p>
      </div>
      <div className={classes["area-state"]}>
        <h3 className={classes["area-state-name"]}>States Covered</h3>
        <p className={classes["area-state-count"]}>{`${stateCount}`}</p>
      </div>
      <div className={classes["area-state"]}>
        <h3 className={classes["area-state-name"]}>Team Size</h3>
        <p className={classes["area-state-count"]}>{`${teamCount}+`}</p>
      </div>
    </div>
  );
};

export default AreaStates;
