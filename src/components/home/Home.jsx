import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import mouseLocation from "../../util/mouseLocation";
// import Header from "../ui/header/Header";
// import Nav from "../ui/nav/Nav";
// import updot from "../../assets/img/updot.svg";
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
      if (scrollRef && !props.isNotScroll) {
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

  return (
    <Fragment>
      <div ref={sectionRef} className={classes.home}>
        {props.showLogo ? (
          <h1 className={classes.heading}>
            {props.heading}
            {/* <div
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
            </div> */}
            <span className={classes["heading-logo"]}>
              <svg
                width="352"
                height="84"
                viewBox="0 0 352 84"
                xmlns="http://www.w3.org/2000/svg"
                fill={isLightThemeActive ? "black" : "white"}
              >
                <path d="M344.75 0.910011C343.399 0.908033 342.077 1.30693 340.953 2.05622C339.828 2.80551 338.951 3.87152 338.433 5.11936C337.914 6.36721 337.778 7.7408 338.04 9.06635C338.302 10.3919 338.952 11.6098 339.907 12.566C340.862 13.5222 342.079 14.1737 343.404 14.4381C344.729 14.7024 346.103 14.5677 347.351 14.0511C348.6 13.5344 349.667 12.659 350.418 11.5356C351.169 10.4122 351.57 9.0913 351.57 7.74003C351.57 5.93033 350.852 4.1946 349.573 2.91401C348.294 1.63342 346.56 0.912661 344.75 0.910011V0.910011ZM344.75 13.99C343.511 13.992 342.299 13.6263 341.268 12.9392C340.237 12.2521 339.433 11.2745 338.958 10.1303C338.483 8.98598 338.359 7.72646 338.6 6.51121C338.841 5.29596 339.437 4.17961 340.313 3.30354C341.19 2.42746 342.306 1.83105 343.521 1.58982C344.736 1.3486 345.996 1.47342 347.14 1.94846C348.284 2.42351 349.262 3.22742 349.949 4.2584C350.636 5.28938 351.002 6.50107 351 7.74003C350.997 9.39682 350.338 10.985 349.166 12.1565C347.995 13.3281 346.407 13.9874 344.75 13.99V13.99Z" />
                <path d="M277.25 14.56V28.01H299.05V83.49H312.49V28.01H334.28V14.56H277.25Z" />
                <path d="M236.89 14.57C230.074 14.57 223.412 16.5911 217.745 20.3776C212.078 24.1641 207.661 29.546 205.053 35.8427C202.445 42.1395 201.762 49.0683 203.092 55.7528C204.422 62.4374 207.704 68.5776 212.523 73.3969C217.342 78.2163 223.483 81.4982 230.167 82.8279C236.852 84.1575 243.781 83.4751 250.077 80.8669C256.374 78.2587 261.756 73.8419 265.542 68.175C269.329 62.508 271.35 55.8455 271.35 49.03C271.35 44.5046 270.459 40.0236 268.727 35.8427C266.995 31.6619 264.457 27.863 261.257 24.6631C258.057 21.4632 254.258 18.9249 250.077 17.1931C245.896 15.4614 241.415 14.57 236.89 14.57V14.57ZM236.89 70.05C232.737 70.05 228.676 68.8184 225.223 66.5109C221.77 64.2034 219.078 60.9236 217.489 57.0864C215.899 53.2491 215.483 49.0267 216.294 44.9531C217.104 40.8795 219.104 37.1377 222.041 34.2008C224.978 31.2639 228.72 29.2638 232.793 28.4535C236.867 27.6432 241.089 28.0591 244.926 29.6485C248.764 31.238 252.043 33.9296 254.351 37.383C256.658 40.8365 257.89 44.8966 257.89 49.05C257.89 54.6196 255.678 59.961 251.739 63.8993C247.801 67.8375 242.46 70.05 236.89 70.05V70.05Z" />
                <path d="M159 14.55H134.63V83.48H159C168.142 83.48 176.91 79.8484 183.374 73.384C189.838 66.9196 193.47 58.1521 193.47 49.01C193.47 39.868 189.838 31.1004 183.374 24.636C176.91 18.1716 168.142 14.54 159 14.54V14.55ZM159 70.05H148.07V28.05H159C164.57 28.05 169.911 30.2625 173.849 34.2008C177.788 38.139 180 43.4805 180 49.05C180 54.6196 177.788 59.961 173.849 63.8993C169.911 67.8375 164.57 70.05 159 70.05V70.05Z" />
                <path d="M100.27 14.56H71.79V83.5H85.24V28H100.24C101.897 27.8561 103.566 28.0583 105.141 28.5937C106.716 29.1291 108.162 29.9861 109.388 31.1103C110.614 32.2344 111.593 33.6012 112.263 35.1238C112.932 36.6464 113.278 38.2916 113.278 39.955C113.278 41.6184 112.932 43.2636 112.263 44.7862C111.593 46.3088 110.614 47.6756 109.388 48.7998C108.162 49.9239 106.716 50.7809 105.141 51.3163C103.566 51.8517 101.897 52.0539 100.24 51.91H94.17V65.36H100.25C106.987 65.36 113.447 62.6839 118.211 57.9205C122.974 53.1571 125.65 46.6965 125.65 39.96C125.65 33.2235 122.974 26.7629 118.211 21.9995C113.447 17.2361 106.987 14.56 100.25 14.56H100.27Z" />
                <path d="M49.06 52.24C49.06 56.9635 47.1836 61.4936 43.8436 64.8336C40.5035 68.1736 35.9735 70.05 31.25 70.05C26.5265 70.05 21.9964 68.1736 18.6564 64.8336C15.3164 61.4936 13.44 56.9635 13.44 52.24V14.58H0V52.24C0 60.528 3.2924 68.4766 9.15291 74.3371C15.0134 80.1976 22.962 83.49 31.25 83.49C39.538 83.49 47.4866 80.1976 53.3471 74.3371C59.2076 68.4766 62.5 60.528 62.5 52.24V14.58H49.06V52.24Z" />
                <path d="M346.17 8.59004C346.506 8.462 346.803 8.24992 347.033 7.97413C347.264 7.69834 347.42 7.36807 347.486 7.01487C347.552 6.66168 347.526 6.29737 347.412 5.95686C347.297 5.61635 347.097 5.311 346.83 5.07002C346.291 4.66163 345.625 4.45943 344.95 4.50001H342.55V10.67H343.43V8.80003H345.34L346.67 10.67H347.62L346.17 8.59004ZM344.93 8.03001H343.43V5.27003H344.93C345.376 5.26122 345.813 5.40202 346.17 5.67003C346.31 5.80182 346.421 5.9607 346.497 6.13694C346.573 6.31319 346.612 6.5031 346.612 6.69502C346.612 6.88694 346.573 7.07685 346.497 7.25309C346.421 7.42934 346.31 7.58822 346.17 7.72001C345.802 7.9562 345.366 8.06509 344.93 8.03001V8.03001Z" />
              </svg>
            </span>
          </h1>
        ) : (
          <h1 className={classes.heading}>{props.heading}</h1>
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
