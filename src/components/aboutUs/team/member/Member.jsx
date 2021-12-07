import { useState } from "react";
import classes from "./Member.module.scss";

import linkedinIcon from "../../../../assets/img/linkedin-icon-color.svg";

const Member = ({ img, data }) => {
  const [image, setImage] = useState("");

  (function (imgName) {
    import(`../../../../assets/img/teams/${imgName}.png`).then((obj) =>
      setImage(obj.default)
    );
  })(img);

  return (
    <>
      <div className={classes["member"]}>
        <div className={classes["member-img-container"]}>
          <span className={classes["member-img-bg"]}></span>
          <div className={classes["img-wrapper"]}>
            <img src={image} alt={data.name} className={classes["color-img"]} />
          </div>
        </div>
        <div className={classes["member-text"]}>
          <h4 className={classes["name"]}>
            <a href="/" target="_blank">
              <img src={linkedinIcon} alt={`${data.name}'s Linkedin`} />
              <span>{data.name}</span>
            </a>
          </h4>
          <p className={classes["position"]}>{data.position}</p>
        </div>
      </div>
    </>
  );
};

export default Member;
