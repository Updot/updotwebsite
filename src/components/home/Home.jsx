import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import mouseLocation from "../../util/mouseLocation";
// import Header from "../ui/header/Header";
// import Nav from "../ui/nav/Nav";
import updot from "../../assets/img/updot.svg";
import maskVideo from "../../assets/videos/mask-video.mp4";
// import { navStateAction } from "../../store/NavState";
// import { mouseLocationAction } from "../../store/mouseLocation";
import colorTheme from "./colorTheme.json";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom";
// import { useCallback } from "react";

const Home = (props) => {
  // const isNavActive = useSelector((state) => state.navState.isActive);
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );

  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const handler = (event) => {
      if (scrollRef) {
        if (window.scrollY > 80) {
          scrollRef.current.classList.add(`${classes["scroll-fade"]}`);
        } else {
          scrollRef.current.classList.remove(`${classes["scroll-fade"]}`);
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [dispatch]);

  useEffect(() => {
    let theme;
    if (isLightThemeActive) {
      theme = colorTheme["light"];
    } else {
      theme = colorTheme["dark"];
    }
    document.body.style.setProperty("--bg-color", theme.bgColor1);
    document.body.style.setProperty("--bg-color-2", theme.bgColor2);
    document.body.style.setProperty("--bg-color-3", theme.bgColor3);
    document.body.style.setProperty("--text-color", theme.textColor);
    document.body.style.setProperty(
      "--tech-icon-bg-color",
      theme.techIconBgColor
    );
    document.body.style.setProperty("--text-color-2", theme.textColor2);
    document.body.style.setProperty(
      "--input-border-dark",
      theme.inputBorderDark
    );
    document.body.style.setProperty(
      "--input-border-fade",
      theme.inputBorderFade
    );
    document.body.style.setProperty("--box-shadow-light", theme.boxShadowLight);
    document.body.style.setProperty("--nav-bg", theme.navBg);
    document.body.style.setProperty("--box-shadow-dark", theme.boxShadowDark);
    document.body.style.setProperty("--fade-black", theme.fadeBlack);
    document.body.style.setProperty("--filter", theme.filter);
  }, [isLightThemeActive]);

  let style = {};
  if (props.hideInner) {
    style = { display: "none" };
  }
  if (props.isNotScroll && window.innerWidth < 800) {
    style = { placeContent: "unset", alignContent: "end" };
  }

  let headingStyle = {};
  // if (window.innerWidth > 600 && window.innerWidth < 800) {
  //   headingStyle = props.isPadding ? { paddingLeft: "50%" } : {};
  // }
  if (props.isShowVideoHeading && window.innerWidth < 1070) {
    headingStyle["width"] = window.innerWidth >= 600 ? "30%" : "50%";
    headingStyle["paddingLeft"] = "2.5rem";
  }
  if (props.textCenter) headingStyle["textAlign"] = "center";
  if (props.textCenter) headingStyle["alignItems"] = "center";
  if (props.fontSize && window.innerWidth < 1070)
    headingStyle["fontSize"] = props.fontSize;
  if (window.innerWidth < 1070 && props.fontSize)
    headingStyle["transform"] = "unset";

  return (
    <Fragment>
      <div ref={sectionRef} className={classes.home} style={style}>
        {props.isShowVideoHeading ? (
          <h1 className={classes.heading} style={headingStyle}>
            {props.heading}
            <div
              className={classes["heading-video"]}
              style={{
                maskImage: `url(${updot})`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskImage: `url(${updot})`,
                backgroundColor: "var(--bg-color)",
              }}
            >
              <video src={`${maskVideo}`} autoPlay loop muted></video>
            </div>
          </h1>
        ) : (
          <h1 className={classes.heading} style={headingStyle}>
            {props.heading}
          </h1>
        )}
        {!props.isNotScroll && (
          <div ref={scrollRef} className={classes.scroll}>
            <span className={classes["scroll-text"]}>Scroll</span>
            <span
              className={`${classes["scroll-text"]} ${classes["swipe-text"]}`}
            >
              Swipe
            </span>
          </div>
        )}
        {props.isNotScroll && (
          <div className={classes["services"]}>
            <div className={classes["services-container"]}>
              <Link to="/services/web-development">Web Development</Link>
              <Link to="/services/app-development">App Development</Link>
              <Link to="/services/chatbot-development">
                Chatbot Development
              </Link>
              <Link to="/services/devops-cloud">DevOps & Cloud</Link>
            </div>
            <div className={classes["services-container"]}>
              <Link to="/services/ui-ux">UI/UX Design</Link>
              <Link to="/services/seo">SEO</Link>
              <Link to="/services/branding">Branding</Link>
              <Link to="/services/digital-marketing">Digital Marketing</Link>
              <Link to="/services/maintenance-and-upgrade">
                Maintenance and Upgrade
              </Link>
            </div>
          </div>
        )}
        {props.service && (
          <div className={classes["service"]}>
            <h3>{props.service}</h3>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
