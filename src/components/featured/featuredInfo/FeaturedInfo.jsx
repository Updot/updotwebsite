import React, { useEffect, useRef } from "react";
import classes from "./FeaturedInfo.module.scss";

const FeaturedInfo = (props) => {
  const wrapperRef = useRef(null);
  const featuredInfoContainerRef = useRef(null);
  const fiRef = useRef(null);
  // const bubbleRef = useRef(null);
  // const isLightThemeActive = useSelector(
  //   (state) => state.themeState.isLightThemeActive
  // );

  useEffect(() => {
    let onEntry = (entries) => {
      entries.forEach((change) => {
        if (!props.isAnimated) {
          if (fiRef.current) {
            if (change.isIntersecting) {
              fiRef.current.classList.add(
                `${classes["featured-info-outer-animate"]}`
              );
              if (window.innerWidth < 800) {
                featuredInfoContainerRef.current.classList.add(
                  `${classes["featured-info-container-animate"]}`
                );
              }
              props.setIsAnimated(false);
              setTimeout(() => {
                if (props.setIsWebsiteAnimated) {
                  props.setIsWebsiteAnimated(true);
                }
              }, 1000);
            }
          }
        } else {
          fiRef.current.classList.add(
            `${classes["featured-info-outer-open"]}`,
            `${classes["featured-info-outer-expand"]}`
          );
          if (window.innerWidth < 800)
            featuredInfoContainerRef.current.classList.add(
              `${classes["featured-info-container-animate-sec"]}`
            );
        }
        if (!change.isIntersecting && window.innerWidth < 800) {
          // fiRef.current.classList.remove(
          //   `${classes["featured-info-outer-animate"]}`
          // );
          featuredInfoContainerRef.current.classList.remove(
            `${classes["featured-info-container-animate-sec"]}`
          );
          featuredInfoContainerRef.current.classList.remove(
            `${classes["featured-info-container-animate"]}`
          );
        }
      });
    };
    let options = {
      threshold: [0.2],
    };

    let observer = new IntersectionObserver(onEntry, options);
    const el = document.querySelector(`[data-section="Featured"]`);
    observer.observe(el);
    return () => observer.disconnect();
  }, [props]);
  return (
    <div ref={wrapperRef} className={classes["featured-info-wrapper"]}>
      <div ref={fiRef} className={classes["featured-info-outer"]}>
        {/* <div
          ref={bubbleRef}
          className={classes["featured-sunction-bubble"]}
        ></div> */}
        <div
          ref={featuredInfoContainerRef}
          className={classes["featured-info-container"]}
        >
          <div className={classes["featured-info"]}>
            <img src={props.logo} alt="remax" />
            <p className={classes["featured-subtext"]}>{props.description}</p>
            <a
              href={props.btnUrl}
              target="_blank"
              className="btn"
              rel="noreferrer"
              style={{ color: props.btnColor, borderColor: props.btnColor }}
            >
              {props.btnText}
            </a>
          </div>
          <div className={classes["featured-graphics"]}>
            <img src={props.ui} alt="remax web design" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
