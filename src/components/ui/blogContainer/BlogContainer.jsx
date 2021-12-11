import classes from "./BlogContainer.module.scss";

const BlogContainer = (props) => {
  if (props.paraOnly)
    return (
      <div className={classes["container-para"]}>
        <p dangerouslySetInnerHTML={{ __html: props.children }}></p>
      </div>
    );
  else if (props.imageOnly && props.imageCount === 1) {
    return (
      <div className={classes["container"]}>
        <div className={classes["image-container"]}>{props.children}</div>
      </div>
    );
  } else if (props.imageOnly && props.imageCount === 2) {
    return (
      <div className={classes["container"]}>
        <div className={classes["image-container-2"]}>{props.children}</div>
      </div>
    );
  } else
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
        <div
          className={classes["container-img"]}
          style={{ margin: props.margin }}
        >
          <img src={props.img} alt="ima" />
        </div>
      </div>
    );
};

export default BlogContainer;
