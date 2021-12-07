import classes from "./Loader.module.scss";

import updot from "../../../assets/img/updot-logo.svg";
import { useDispatch } from "react-redux";
import { pageStateAction } from "../../../store/pageState";
const Loader = () => {
  const dispatch = useDispatch();
  window.onload = (e) => {
    dispatch(pageStateAction.setLoaded());
  };
  return (
    <div className={classes["loader"]}>
      <img className={classes["logo"]} src={updot} alt="updot" />
      <div className={classes["loader-dot-container"]}>
        <div
          className={`${classes["loader-dot"]} ${classes["loader-dot-1"]}`}
        ></div>
        <div
          className={`${classes["loader-dot"]} ${classes["loader-dot-2"]}`}
        ></div>
        <div
          className={`${classes["loader-dot"]} ${classes["loader-dot-3"]}`}
        ></div>
        <div
          className={`${classes["loader-dot"]} ${classes["loader-dot-4"]}`}
        ></div>
        <div
          className={`${classes["loader-dot"]} ${classes["loader-dot-5"]}`}
        ></div>
        <div
          className={`${classes["loader-dot"]} ${classes["loader-dot-6"]}`}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
