import { NavLink } from "react-router-dom";
import linkedinImg from "../../assets/img/linkedin.svg";
import facebookImg from "../../assets/img/fb-icon.svg";
import instagramImg from "../../assets/img/insta-icon.svg";
import upArrow from "../../assets/img/up-arrow.svg";
import classes from "./Footer.module.scss";

const Footer = (props) => {
  const onUpArrowClickHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section
      className={classes.footer}
      style={{
        paddingTop:
          window.innerWidth < 800
            ? "0vh"
            : `${props.height ? props.height : "8vh"}`,
      }}
    >
      <div className={classes["footer-top"]}>
        <div className={classes.inbox}>
          <h3 className={classes["footer-heading"]}>Inbox Us</h3>
          <a className={classes["footer-link"]} href="mailto:hello@updot.in">
            hello@updot.in
          </a>
        </div>
        <div className={classes.ring}>
          <h3 className={classes["footer-heading"]}>Ring Us Up</h3>
          <div className={classes["footer-link-container"]}>
            <a className={classes["footer-link"]} href="tel:+916362070745">
              +91 63620 70745
            </a>
            <a className={classes["footer-link"]} href="tel:+919074490845">
              +91 90744 90845
            </a>
          </div>
        </div>
        <a
          className={classes.spot}
          href="https://maps.app.goo.gl/HQU1YwRzJHdY5ydr8"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className={classes["footer-heading"]}>Spot Us</h3>
          <p className={classes["footer-address"]}>
            No.32, next to Spring Valley Club,
            <br /> Bengaluru, Karnataka 560090
          </p>
        </a>
        <div className={classes.follow}>
          <h3 className={classes["footer-heading"]}>Follow Us</h3>
          <div className={classes["footer-link-container"]}>
            <a
              className={classes["footer-link"]}
              href="https://www.linkedin.com/company/updot/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes["fb-icon"]}
                src={linkedinImg}
                alt="linkedin"
              />
            </a>
            <a
              className={classes["footer-link"]}
              href="https://www.instagram.com/updotofficial/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes["insta-icon"]}
                src={instagramImg}
                alt="instagram"
              />
            </a>
            <a
              className={classes["footer-link"]}
              href="https://www.facebook.com/updotofficial"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes["fb-icon"]}
                src={facebookImg}
                alt="facebook"
              />
            </a>
          </div>
        </div>
        <div className={classes["up-arrow-wrap"]}>
          <div className={classes["up-arrow"]} onClick={onUpArrowClickHandler}>
            <svg
              // width="24"
              // height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12L12 2L2 12"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={classes["footer-bottom"]}>
        <p className={classes["footer-copyright"]}>
          © Copyright {new Date().getFullYear()} UPDOT. All rights reserverd
        </p>
        <div className={classes["footer-tp"]}>
          <NavLink to="/term-and-conditions">Terms and Conditions</NavLink>{" "}
          <span>|</span>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        </div>
      </div>
    </section>
  );
};

export default Footer;
