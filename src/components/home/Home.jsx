import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import mouseLocation from "../../util/mouseLocation";
import Header from "../ui/Header";
import Nav from "../ui/Nav";

import updot from "../../assets/img/updot.svg";
import maskVideo from "../../assets/videos/mask-video.mp4";
import classes from "./Home.module.css";
import { navStateAction } from "../../store/NavState";
const Home = () => {
  const isNavActive = useSelector((state) => state.navState.isActive);
  const [headerDisplayed, setHeaderDisplayed] = useState(true);
  const sectionRef = useRef(null);
  const navRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 100) {
        setHeaderDisplayed(false);
      } else {
        setHeaderDisplayed(true);
      }
      mouseLocation(
        { default: true, RestCoords: { x: 108, y: 23 } },
        {
          el: sectionRef.current,
        },
        dispatch
      );
    });
  }, [dispatch]);
  const navClickHandler = () => {
    if (!isNavActive) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "scroll";
    }
    dispatch(navStateAction.setIsActive());
    // setRestrictedBounding(bounding);
  };

  return (
    <Fragment>
      {headerDisplayed && (
        <Header
          onNavBtnClick={navClickHandler}
          showNavBtn={true}
          navRef={navRef}
        />
      )}
      {isNavActive && <Nav ref={navRef} />}

      <div ref={sectionRef} className={classes.home}>
        <h1 className={classes.heading}>
          Lorem ipsum dolor sit
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
              backgroundColor: "#fff",
            }}
          >
            <video src={`${maskVideo}`} autoPlay loop muted></video>
          </div>
        </h1>
        <div className={classes.scroll}>
          <span className={classes["scroll-text"]}>Scroll</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
