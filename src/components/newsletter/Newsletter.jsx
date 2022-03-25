import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import UpdotLogo from "../../assets/img/updot-big.svg";
import rightArrow from "../../assets/img/right-arrow.svg";
import Input from "../connect/formFields/Input";
import classes from "./Newsletter.module.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState({
    message: "",
    done: false,
    label: "Subscribe",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmail("");
      setSubmit({
        ...submit,
        message: `Hi ${email}! Thank you for subscribing to our newsletter`,
        label: "You're Done!",
        done: true,
      });
      setTimeout(() => {
        setSubmit({
          ...submit,
          message: "",
          label: "Subscribe",
          done: false,
        });
      }, 3000);
    }
    if (!email) {
      setSubmit({
        ...submit,
        message: "Email is not valid",
        done: false,
      });
    }
  };
  console.log(email);
  return (
    <Fragment>
      <div className={classes["connect-btn"]}>
        <Link to="/contact">
          Let's Connect <img src={rightArrow} alt="right arrows" />
        </Link>
      </div>
      <div className={classes.newsletter}>
        <div className={classes["newsletter-container"]}>
          <h3 className={classes["newsletter-heading"]}>
            Subscribe to our Newsletter
          </h3>
          <form className={classes["newsletter-form"]}>
            <Input
              type="email"
              placeholder="Email*"
              autoComplete="email"
              value={email}
              handleChange={(val) => setEmail(val)}
            />
            <div className={classes["newsletter-btn-container"]}>
              <button
                className={
                  submit.done ? classes["subs-done-btn"] : classes["subs-btn"]
                }
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                {submit.label}
              </button>
            </div>
            {submit.done && (
              <p className={classes["newsletter-submit-message"]}>
                {submit.message}
              </p>
            )}
            {!submit.done && (
              <p className={classes["newsletter-error-message"]}>
                {submit.message}
              </p>
            )}
            <p className={classes["newsletter-info"]}>
              We'll never share your info with anyone else.
            </p>
          </form>
        </div>
        <div className={classes["newsletter-logo"]}>
          <img src={UpdotLogo} alt="updot logo" />
        </div>
      </div>
    </Fragment>
  );
};

export default Newsletter;
