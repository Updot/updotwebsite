import UpdotLogo from "../../assets/img/updot-big.svg";
import InputClasses from "../connect/formFields/Input.module.css";
import classes from "./Newsletter.module.css";
const Newsletter = () => {
  return (
    <div className={classes.newsletter}>
      <div className={classes["newsletter-container"]}>
        <h3 className={classes["newsletter-heading"]}>
          Subscribe to our Newsletter
        </h3>
        <form>
          <input
            className={InputClasses["input"]}
            type="email"
            placeholder="Email*"
          />
          <div className={classes["newsletter-btn-container"]}>
            <button className="btn" type="submit">
              Subscribe Now
            </button>
            <p className={classes["newsletter-info"]}>
              We'll never share your info with anyone else.
            </p>
          </div>
        </form>
      </div>
      <div className={classes["newsletter-logo"]}>
        <img src={UpdotLogo} alt="updot logo" />
      </div>
    </div>
  );
};

export default Newsletter;
