import classes from "./FeaturedNav.module.css";
const FeaturedNav = (props) => {
  const onButtonClickHandler = (val, e) => {
    document
      .querySelectorAll(`.${classes["featured-nav-btn"]}`)
      .forEach((item) => {
        item.classList.remove(`${classes["featured-nav-btn-active"]}`);
      });
    e.target.classList.add(`${classes["featured-nav-btn-active"]}`);
    props.onNavClick(val);
  };
  return (
    <div className={classes["featured-nav"]}>
      <ul>
        <li>
          <button
            onClick={onButtonClickHandler.bind(null, "website")}
            className={`btn ${classes["featured-nav-btn"]} ${classes["featured-nav-btn-active"]}`}
          >
            Websites
          </button>
        </li>
        <li>
          <button
            onClick={onButtonClickHandler.bind(null, "apps")}
            className={`btn ${classes["featured-nav-btn"]}`}
          >
            Apps
          </button>
        </li>
        <li>
          <button
            onClick={onButtonClickHandler.bind(null, "branding")}
            className={`btn ${classes["featured-nav-btn"]}`}
          >
            Branding
          </button>
        </li>
        <li>
          <button
            onClick={onButtonClickHandler.bind(null, "marketing")}
            className={`btn ${classes["featured-nav-btn"]}`}
          >
            Marketing
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FeaturedNav;
