import blogPlaceholder from "./../../../assets/img/insight-placeholder.png";
import classes from "./BlogCard.module.css";
const BlogImage = (props) => {
  const animateClass = props.isTrue
    ? `${classes["blog-dot-animate-even"]}`
    : `${classes["blog-dot-animate-odd"]}`;

  return (
    <div
      className={`${classes["blog-img-container"]} mask`}
      style={props.imageStyle}
    >
      <div className={`${classes["blog-img-inner"]} ${animateClass}`}>
        <img
          src={props.image || blogPlaceholder}
          alt="blogperson"
          onMouseOver={props.onMouseOverHandler}
        />
        <div className={classes["dot"]}></div>
      </div>
    </div>
  );
};

export default BlogImage;
