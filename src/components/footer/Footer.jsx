import { NavLink } from "react-router-dom";
import linkedinImg from "../../assets/img/linkedin.svg";
import facebookImg from "../../assets/img/fb-icon.svg";
import instagramImg from "../../assets/img/insta-icon.svg";
import upArrow from "../../assets/img/up-arrow.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  const onUpArrowClickHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className={classes.footer}>
      <div className={classes["footer-top"]}>
        <div className={classes.inbox}>
          <h5 className={classes["footer-heading"]}>Inbox Us</h5>
          <a
            className={classes["footer-link"]}
            href="mailto:updotofficial@gmail.com"
          >
            updotofficial@gmail.com
          </a>
        </div>
        <div className={classes.ring}>
          <h5 className={classes["footer-heading"]}>Ring Us Up</h5>
          <div className={classes["footer-link-container"]}>
            <a className={classes["footer-link"]} href="tel:+918549827162">
              +91 85498 27162
            </a>
            <a className={classes["footer-link"]} href="tel:+919074490845">
              +91 90744 90845
            </a>
          </div>
        </div>
        <div className={classes.spot}>
          <h5 className={classes["footer-heading"]}>Spot Us</h5>
          <p className={classes["footer-address"]}>
            No.8, next to Spring Valley Club,
            <br /> Bengaluru, Karnataka 560090
          </p>
        </div>
        <div className={classes.follow}>
          <h5 className={classes["footer-heading"]}>Follow Us</h5>
          <div className={classes["footer-link-container"]}>
            <a className={classes["footer-link"]} href="/">
              <img
                className={classes["fb-icon"]}
                src={linkedinImg}
                alt="linkedin"
              />
            </a>
            <a className={classes["footer-link"]} href="/">
              <img
                className={classes["insta-icon"]}
                src={instagramImg}
                alt="instagram"
              />
            </a>
            <a className={classes["footer-link"]} href="/">
              <img
                className={classes["fb-icon"]}
                src={facebookImg}
                alt="facebook"
              />
            </a>
          </div>
        </div>
        <div className={classes["up-arrow"]}>
          <img src={upArrow} alt="up arrow" onClick={onUpArrowClickHandler} />
        </div>
      </div>
      <div className={classes["footer-bottom"]}>
        <p className={classes["footer-copyright"]}>
          © Copyright 2021 UPDOT. All rights reserverd
        </p>
        <div className={classes["footer-tp"]}>
          <NavLink to="/">Terms and Conditions</NavLink> <span>|</span>
          <NavLink to="/">Privacy Policy</NavLink>
        </div>
      </div>
    </section>
  );
};

export default Footer;
