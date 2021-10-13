import classes from "./TechNav.module.css";

const TechNav = (props) => {
  const techNavClickHandler = (navItem, event) => {
    document
      .querySelectorAll(`.${classes["tech-nav"]} li button`)
      .forEach((el) => el.classList.remove(`${classes["tech-nav-active"]}`));
    event.target.classList.add(`${classes["tech-nav-active"]}`);
    props.onNavClick(navItem);
  };
  return (
    <ul className={classes["tech-nav"]}>
      <li>
        <button
          className={classes["tech-nav-active"]}
          onClick={techNavClickHandler.bind(null, "frontend")}
        >
          Front End
        </button>
      </li>
      <li>
        <button onClick={techNavClickHandler.bind(null, "backend")}>
          Back End
        </button>
      </li>
      <li>
        <button onClick={techNavClickHandler.bind(null, "mobile")}>
          Mobile
        </button>
      </li>
      <li>
        <button onClick={techNavClickHandler.bind(null, "cms")}>CMS</button>
      </li>
      <li>
        <button onClick={techNavClickHandler.bind(null, "database")}>
          Database
        </button>
      </li>
    </ul>
  );
};

export default TechNav;
