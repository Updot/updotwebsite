import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./FeaturedInfo.module.css";
const FeaturedInfo = (props) => {
  const wrapperRef = useRef(null);
  const featuredInfoContainerRef = useRef(null);
  const fiRef = useRef(null);
  // const bubbleRef = useRef(null);
  useEffect(() => {
    let onEntry = (entries) => {
      entries.forEach((change) => {
        if (!props.isAnimated) {
          if (fiRef.current) {
            if (change.isIntersecting) {
              fiRef.current.classList.add(
                `${classes["featured-info-outer-animate"]}`
              );
              if (window.innerWidth < 800)
                featuredInfoContainerRef.current.classList.add(
                  `${classes["featured-info-container-animate"]}`
                );
              props.setIsAnimated(false);
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
          console.log("out");
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
  // useEffect(() => {
  //   const el = document.querySelector("[data-arrow='mousearrow']");
  //   window.addEventListener("scroll", (e) => {
  //     setFeatureBoundary(wrapperRef.current.getBoundingClientRect().top - 70);
  //   });
  //   window.addEventListener("mouseover", (e) => {
  //     if (featuredBoundary < e.clientY) {
  //       if (featuredBoundary + 40 < e.clientY) {
  //         el.classList.remove("mousearrow-change");
  //         el.classList.add("mousearrow-change-up");
  //       } else {
  //         el.classList.remove("mousearrow-change-up");
  //         el.classList.add("mousearrow-change");
  //       }
  //     }
  //     if (featuredBoundary + 200 < e.clientY || featuredBoundary > e.clientY) {
  //       el.classList.remove("mousearrow-change");
  //       el.classList.remove("mousearrow-change-up");
  //     }
  //   });
  // }, [featuredBoundary]);
  const onMouseOverOuterHandler = (event) => {
    document.querySelector("[data-arrow='mousearrow']").style.filter =
      "invert(100%)";
  };
  const onMouseOutOuterHandler = () => {
    document.querySelector("[data-arrow='mousearrow']").style.filter = "unset";
  };
  const onMouseOverHandler = (event) => {};
  const onMouseOutHandler = () => {
    // bubbleRef.current.style.top = `${0}px`;
  };

  return (
    <div
      ref={wrapperRef}
      className={classes["featured-info-wrapper"]}
      onMouseOver={onMouseOverOuterHandler}
      onMouseOut={onMouseOutOuterHandler}
    >
      <div ref={fiRef} className={classes["featured-info-outer"]}>
        {/* <div
          ref={bubbleRef}
          className={classes["featured-sunction-bubble"]}
        ></div> */}
        <div
          ref={featuredInfoContainerRef}
          className={classes["featured-info-container"]}
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
        >
          <div className={classes["featured-info"]}>
            <img src={props.logo} alt="remax" />
            <p className={classes["featured-subtext"]}>{props.description}</p>
            <Link
              to="#"
              className="btn"
              style={{ color: props.btnColor, borderColor: props.btnColor }}
            >
              {props.btnText}
            </Link>
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
