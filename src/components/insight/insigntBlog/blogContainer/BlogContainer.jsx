import classes from "./BlogContainer.module.css";
const BlogContainer = (props) => {
  if (!props.paraOnly)
    return (
      <div
        className={classes["container"]}
        style={{
          flexDirection: `${props.flow}`,
          alignItems: `${props.align === "end" ? "flex-end" : "center"}`,
          marginBottom: `${props.marginBottom}px`,
        }}
      >
        <div className={classes["container-text"]}>
          <p>{props.children}</p>
        </div>
        <div className={classes["container-img"]}>
          <img src={props.img} alt="ima" />
        </div>
      </div>
    );
  else
    return (
      <div className={classes["container-para"]}>
        <p>{props.children}</p>
      </div>
    );
};

export default BlogContainer;
