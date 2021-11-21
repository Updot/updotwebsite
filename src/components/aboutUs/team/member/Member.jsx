import { useState } from "react";
import classes from "./Member.module.css";

// const image = require.context("../../../../assets/img/teams/");
const Member = (props) => {
  const [bnwImg, setBnwImg] = useState("");
  const [colorImg, setColorImg] = useState("");
  // const iconImage = image(`./${props.img}-bnw.svg`).default;
  // const iconImageColor = image(`./${props.img}.svg`);
  (function (imgName) {
    import(`../../../../assets/img/teams/${imgName}-bnw.svg`).then((image) =>
      setBnwImg(image.default)
    );
  })(props.img);
  (function (imgName) {
    import(`../../../../assets/img/teams/${imgName}.svg`).then((image) =>
      setColorImg(image.default)
    );
  })(props.img);
  return (
    <div className={classes["member"]}>
      <div className={classes["member-img-container"]}>
        <span className={classes["member-img-bg"]}></span>
        {bnwImg && (
          <img
            src={bnwImg}
            alt={props.data.name}
            className={classes["bnw-img"]}
          />
        )}
        {colorImg && (
          <img
            src={colorImg}
            alt={props.data.name}
            className={classes["color-img"]}
          />
        )}
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
