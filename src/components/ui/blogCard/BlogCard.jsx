import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import blogPlaceholder from "./../../../assets/img/insight-placeholder.png";
import rightArrow from "./../../../assets/img/right-arrow.svg";
import downArrow from "./../../../assets/img/down-arrow.svg";
import classes from "./BlogCard.module.css";
const BlogCard = (props) => {
  const dotRef = useRef(null);
  const isTrue =
    props.isLeft || parseInt((props.index + 1) / 2) === (props.index + 1) / 2;
  const location = useLocation();
  const style = isTrue
    ? {
        flexDirection: "row-reverse",
        paddingLeft: "7.5vw",
        justifyContent: "flex-start",
        columnGap: "5vw",
      }
    : {
        flexDirection: "row",
        paddingRight: "7.5vw",
      };
  const imageStyle = isTrue
    ? {
        transform: "translateX(5%)",
      }
    : {
        transform: "translateX(-5%)",
      };

  const arrowStyle = {};
  if (isTrue) arrowStyle["marginRight"] = "12%";
  if (props.isArrowLeftMargin) arrowStyle["marginLeft"] = "4rem";
  const animateClass = isTrue
    ? `${classes["blog-dot-animate-even"]}`
    : `${classes["blog-dot-animate-odd"]}`;

  const onMouseOverHandler = () => {
    console.log(dotRef.current.getBoundingClientRect());
  };
  return (
    <div
      id={props.workId}
      className={classes["blog-card"]}
      mask="true"
      style={style}
    >
      <div
        className={`${classes["blog-img-container"]} mask`}
        style={imageStyle}
      >
        <div className={`${classes["blog-img-inner"]} ${animateClass}`}>
          <img
            src={blogPlaceholder}
            alt="blogperson"
            onMouseOver={onMouseOverHandler}
          />
          <div ref={dotRef} className={classes["dot"]}></div>
        </div>
      </div>
      {!props.hideDefault && (
        <Link
          to={`${location.pathname}/${props.workId}`}
          className={classes["blog-heading-container"]}
          style={isTrue ? { textAlign: "right" } : {}}
        >
          <h1>
            {props.heading}
            {props.arrowInline && (
              <img style={arrowStyle} src={downArrow} alt="right arrow" />
            )}
          </h1>
          {!props.arrowInline && (
            <img style={arrowStyle} src={downArrow} alt="right arrow" />
          )}
        </Link>
      )}
      {props.hideDefault && props.children}
    </div>
  );
};

export default BlogCard;
