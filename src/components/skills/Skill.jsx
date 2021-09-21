import Lottie from "react-lottie";
import classes from "./Skill.module.css";

const Skill = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={classes.skill}>
      <div className={classes["skill-text"]}>
        {props.skillData.name && (
          <h4 className={classes["skill-heading"]}>{props.skillData.name}</h4>
        )}
        <p className={classes["skill-para"]}>{props.skillData.desc}</p>
      </div>
      <div className={classes["skill-icon"]}>
        <div>
          {!props.img && (
            <Lottie
              options={defaultOptions}
              height={window.innerWidth > 800 ? 300 : 200}
              width={window.innerWidth > 800 ? 300 : 200}
              style={{ filter: "var(--filter)" }}
            />
          )}
          {props.img && <img src={props.img} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Skill;
