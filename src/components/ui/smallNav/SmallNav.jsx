import classes from "./SmallNav.module.scss";

const SmallNav = (props) => {
  const onButtonClickHandler = (val, e) => {
    document
      .querySelectorAll(`.${classes["featured-nav-btn"]}`)
      .forEach((item) => {
        item.classList.remove(`${classes["featured-nav-btn-active"]}`);
      });
    e.target.classList.add(`${classes["featured-nav-btn-active"]}`);
    if (props.onNavClick) {
      props.onNavClick(val);
    }
  };
  return (
    <div className={classes["featured-nav"]}>
      <ul>
        {props.navData.map((data, i) => (
          <li key={data}>
            <button
              onClick={onButtonClickHandler.bind(null, data.toLowerCase())}
              className={`btn ${classes["featured-nav-btn"]} ${
                i === 0 ? classes["featured-nav-btn-active"] : ""
              }`}
            >
              {data}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallNav;
