import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import blogPlaceholder from "./../../../assets/img/insight-placeholder.png";
// import rightArrow from "./../../../assets/img/right-arrow.svg";
import leftArrow from "./../../../assets/img/down-arrow.svg";
import classes from "./BlogCard.module.scss";

const BlogNavigateCard = (props) => {
  const dotRef = useRef(null);
  const isTrue = props.isLeft;

  const [img, setImg] = useState("");

  (function (imgName) {
    import(`../../../assets/img/${imgName}.png`).then((obj) =>
      setImg(obj.default)
    );
  })(props.image);

  const style = isTrue
    ? {
        flexDirection: "row-reverse",
        paddingLeft: window.innerWidth > 800 ? "7.5vw" : "5vw",
      }
    : {
        flexDirection: "row",
        paddingRight: window.innerWidth > 800 ? "7.5vw" : "5vw",
      };
  const imageStyle = isTrue
    ? {
        transform: "translateX(5%)",
      }
    : {
        transform: "translateX(-5%)",
      };

  const animateClass = isTrue
    ? `${classes["blog-dot-animate-even"]}`
    : `${classes["blog-dot-animate-odd"]}`;

  const onMouseOverHandler = () => {};

  return (
    <div className={classes["blog-card-2"]} mask="true" style={style}>
      <div
        className={`${classes["blog-img-container"]} mask`}
        style={imageStyle}
      >
        <div className={`${classes["blog-img-inner"]} ${animateClass}`}>
          <img
            src={img || blogPlaceholder}
            alt="blogimage"
            onMouseOver={onMouseOverHandler}
          />
          <div ref={dotRef} className={classes["dot"]}></div>
        </div>
      </div>
      <div style={{ textAlign: isTrue ? "left" : "right" }}>
        <p
          className={classes["sub-text"]}
          style={{ textTransform: "capitalize" }}
        >
          {props.type}
        </p>
        <Link
          to={`${props.link}`}
          className={classes["blog-heading-container-2"]}
          style={isTrue ? { textAlign: "right" } : {}}
        >
          {!isTrue && (
            <h1 className={classes["left-heading"]}>
              <img src={leftArrow} alt="right arrow" />
              {props.heading}
            </h1>
          )}
          {isTrue && (
            <h1 className={classes["right-heading"]}>
              {props.heading}

              <img src={leftArrow} alt="right arrow" />
            </h1>
          )}
        </Link>
      </div>
    </div>
  );
};

export default BlogNavigateCard;
