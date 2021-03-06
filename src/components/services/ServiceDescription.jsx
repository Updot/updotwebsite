import Lottie from "react-lottie";
import classes from "./ServiceDescription.module.scss";

const ServiceDescription = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={classes.skill}
      style={props.isPadding ? { padding: "0 7.5vw" } : {}}
    >
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
              height={
                window.innerWidth > 800
                  ? window.innerWidth < 1200
                    ? 300
                    : 500
                  : 300
              }
              width={
                window.innerWidth > 800
                  ? window.innerWidth < 1200
                    ? 250
                    : 500
                  : 400
              }
              style={{
                filter: "var(--filter)",
              }}
            />
          )}
          {props.img && <img src={props.img} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
