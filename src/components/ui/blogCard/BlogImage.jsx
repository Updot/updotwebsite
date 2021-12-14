import { useState } from "react";
import blogPlaceholder from "../../../assets/img/insight-placeholder.png";
import classes from "./BlogCard.module.scss";

const BlogImage = (props) => {
  const [img, setImg] = useState("");

  const animateClass = props.isTrue
    ? `${classes["blog-dot-animate-even"]}`
    : `${classes["blog-dot-animate-odd"]}`;

  (function (imgName) {
    import(`../../../assets/img/${imgName}.png`).then((obj) =>
      setImg(obj.default)
    );
  })(props.image);

  return (
    <div
      className={`${classes["blog-img-container"]} mask`}
      style={props.imageStyle}
    >
      <div className={`${classes["blog-img-inner"]} ${animateClass}`}>
        <img
          src={img || blogPlaceholder}
          alt="blogperson"
          onMouseOver={props.onMouseOverHandler}
        />
        <div className={classes["dot"]}></div>
      </div>
    </div>
  );
};

export default BlogImage;
