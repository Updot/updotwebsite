import { Link, useLocation } from "react-router-dom";
import downArrow from "./../../../assets/img/down-arrow.svg";
import classes from "./BlogCard.module.scss";
import BlogImage from "./BlogImage";

const BlogCard = (props) => {
  // const dotRef = useRef(null);
  const isTrue =
    props.isLeft || parseInt((props.index + 1) / 2) === (props.index + 1) / 2;
  const location = useLocation();
  const style = isTrue
    ? {
        flexDirection: "row-reverse",
        paddingLeft: "5vw",
        justifyContent: "flex-start",
        columnGap: "6vw",
      }
    : {
        flexDirection: "row",
        paddingRight: "5vw",
        justifyContent: window.innerWidth < 800 && "space-between",
        columnGap: window.innerWidth > 800 ? "20rem" : "5vw",
      };
  const imageStyle = isTrue
    ? {
        transform:
          window.innerWidth > 800 ? "translateX(1%)" : "translateX(15%)",
      }
    : {
        transform:
          window.innerWidth > 800 ? "translateX(-1%)" : "translateX(-15%)",
      };
  const arrowStyle = {};

  const arrowOuterStyle = {};
  if (isTrue && location.pathname.includes("work"))
    arrowStyle["marginRight"] = window.innerWidth > 800 ? "12%" : "0%";
  if (isTrue && window.innerWidth < 800)
    arrowOuterStyle["transform"] = "rotate(90deg)";
  if (props.isArrowLeftMargin) {
    if (window.innerWidth > 800) {
      arrowStyle["marginLeft"] = "4rem";
    } else {
      arrowStyle["marginLeft"] = ".6rem";
    }
  }

  let linkStyle = isTrue ? { textAlign: "right" } : {};
  linkStyle["flexBasis"] = location.pathname.includes("work")
    ? window.innerWidth > 800
      ? "35%"
      : "50%"
    : "60%";
  // linkStyle["marginRight"] =
  //   isTrue &&
  //   location.pathname.includes("work") &&
  //   window.innerWidth < 800 &&
  //   "-20%";

  let headingStyle = isTrue ? { textAlign: "right" } : {};

  const onMouseOverHandler = () => {};

  return (
    <div
      id={props.workId || props.insightId}
      className={classes["blog-card"]}
      mask="true"
      style={style}
    >
      <BlogImage
        image={props.image}
        imageStyle={imageStyle}
        isTrue={isTrue}
        onMouseOverHandler={onMouseOverHandler}
      />
      {!props.hideDefault && (
        <Link
          to={`${location.pathname}/${props.workId || props.insightId}`}
          className={classes["blog-heading-container"]}
          style={linkStyle}
        >
          <h1 style={headingStyle}>
            {props.heading}
            {props.arrowInline && (
              <img
                className={classes["arrow-inline"]}
                style={arrowStyle}
                src={downArrow}
                alt="right arrow"
              />
            )}
          </h1>
          {!props.arrowInline && (
            <img
              style={{ ...arrowStyle, ...arrowOuterStyle }}
              src={downArrow}
              alt="right arrow"
            />
          )}
        </Link>
      )}
      {props.hideDefault && props.children}
    </div>
  );
};

export default BlogCard;
