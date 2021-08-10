import classes from "./SubNav.module.css";
const SubNav = (props) => {
  return (
    <div data-sub-nav={props.subNavName} className={classes["sub-nav"]}>
      <ul>
        {props.subNav.map((subNavItem) => (
          <li key={subNavItem.name} className={classes["sub-nav-item"]}>
            <a href={subNavItem.link}>{subNavItem.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNav;
