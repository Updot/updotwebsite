import Lottie from "react-lottie";
import classes from "./Skill.module.css";
import appIcon from "../../assets/img/lottiefiles/ANDROID.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: appIcon,
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
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            style={{ filter: "var(--filter)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
