import classes from "./TechNav.module.scss";

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
      {props.navData &&
        props.navData.map((navItem, i) => (
          <li key={i}>
            <button
              className={`${i === 0 && classes["tech-nav-active"]}`}
              onClick={techNavClickHandler.bind(null, navItem.slug)}
            >
              {navItem.name}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TechNav;
