import Lottie from "react-lottie";
import classes from "./Skill.module.css";
import animationData from "../../assets/videos/data.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Skill = (props) => {
  return (
    <div className={classes.skill}>
      <div className={classes["skill-text"]}>
        <h4 className={classes["skill-heading"]}>{props.skillData.name}</h4>
        <p className={classes["skill-para"]}>{props.skillData.desc}</p>
      </div>
      <div className={classes["skill-icon"]}>
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
