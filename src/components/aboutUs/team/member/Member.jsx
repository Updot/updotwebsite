import classes from "./Member.module.css";
const Member = (props) => {
  return (
    <div className={classes["member"]}>
      <div className={classes["member-img-container"]}>
        <span className={classes["member-img-bg"]}></span>
        <img src={props.memberImg} alt="Hritik Unnikrishnan" />
      </div>
      <div className={classes["member-text"]}>
        <h4 className={classes["name"]}>
          <a href="/" target="_blank">
            <img
              src={props.linkedinIcon}
              alt={`${props.data.name}'s Linkedin`}
            />
            <span>{props.data.name}</span>
          </a>
        </h4>
        <p className={classes["position"]}>{props.data.position}</p>
      </div>
    </div>
  );
};

export default Member;
