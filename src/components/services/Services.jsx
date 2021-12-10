import { Fragment, useEffect, useState, useRef } from "react";
import Technology from "../technology/Tech";
import webDevIcon from "../../assets/img/skills/webdev-icon.svg";
import Skill from "../skills/Skill";
import classes from "./Services.module.scss";
import SectionHeading from "../ui/SectionHeading";

import WebDevelopmentIcon from "../../assets/img/lottiefiles/pointer.json";
import AppDevelopmentIcon from "../../assets/img/lottiefiles/androidapple.json";
import chatbotdevelopmentIcon from "../../assets/img/lottiefiles/chatbot.json";
import DevOpsCloudIcon from "../../assets/img/lottiefiles/cloud.json";
import UIUXIcon from "../../assets/img/lottiefiles/boxsq.json";
import SeoIcon from "../../assets/img/lottiefiles/search.json";
import BrandingIcon from "../../assets/img/lottiefiles/branding.json";
import DigitalmarketingIcon from "../../assets/img/lottiefiles/thumbsup.json";
import MaintenanceandupgradeIcon from "../../assets/img/lottiefiles/loading.json";

const iconsData = [
  WebDevelopmentIcon,
  AppDevelopmentIcon,
  chatbotdevelopmentIcon,
  DevOpsCloudIcon,
  UIUXIcon,
  SeoIcon,
  BrandingIcon,
  DigitalmarketingIcon,
  MaintenanceandupgradeIcon,
];

const Services = (props) => {
  const animateDotRef = useRef(null);
  const processContainerRef = useRef(null);
  const animateTimelineRef = useRef(null);
  const [iconNumber, setIconNumber] = useState(0);
  const desc = props.data.desc;
  const process = props.data.process;

  useEffect(() => {
    if (props.data.name) {
      if (props.data.name.includes("Web")) setIconNumber(0);
      else if (props.data.name.includes("App")) setIconNumber(1);
      else if (props.data.name.includes("chat")) setIconNumber(2);
      else if (props.data.name.includes("Dev")) setIconNumber(3);
      else if (props.data.name.includes("UI")) setIconNumber(4);
      else if (props.data.name.includes("Seo")) setIconNumber(5);
      else if (props.data.name.includes("Branding")) setIconNumber(6);
      else if (props.data.name.includes("marketing")) setIconNumber(7);
      else if (props.data.name.includes("upgrade")) setIconNumber(8);
    }
  }, [props.data]);

  console.log(iconsData[iconNumber]);

  useEffect(() => {
    let onEntry = (entries) => {
      entries.forEach((change) => {
        if (animateDotRef.current) {
          if (change.isIntersecting) {
            if (
              !animateDotRef.current.classList.contains(
                `${classes["process-timeline-dot-animate"]}`
              )
            ) {
              animateDotRef.current.classList.add(
                `${classes["process-timeline-dot-animate"]}`
              );
              animateTimelineRef.current.classList.add(
                `${classes["process-timeline-animate"]}`
              );
              processContainerRef.current.classList.add(
                `${classes["process-container-animate"]}`
              );
              document
                .querySelectorAll(`.${classes["sub-process"]}`)
                .forEach((el) =>
                  el.classList.add(`${classes["sub-process-animate"]}`)
                );
            }
          } else {
            // animateDotRef.current.classList.remove(
            //   `${classes["process-timeline-dot-animate"]}`
            // );
            // animateTimelineRef.current.classList.remove(
            //   `${classes["process-timeline-animate"]}`
            // );
          }
        }
      });
    };

    let options = {
      threshold: [0.8],
    };

    let observer = new IntersectionObserver(onEntry, options);

    const el = document.querySelector(`.${classes["process-container"]}`);
    observer.observe(el);
  }, []);

  const onMouseOverHandler = (event) => {
    event.target.nextSibling.classList.add(`${classes["show"]}`);
  };

  const onMouseOutHandler = (event) => {
    event.target.nextSibling.classList.remove(`${classes["show"]}`);
  };

  return (
    <Fragment>
      <div className={classes["service-container"]}>
        <Skill
          lottie={iconsData[iconNumber]}
          skillData={{ desc }}
          isPadding={window < 800}
        />
      </div>
      <div className={classes["service-container"]}>
        <Technology services={props.data.services} />
      </div>
      <div className={classes.process}>
        <SectionHeading>Process</SectionHeading>
        <div ref={processContainerRef} className={classes["process-container"]}>
          <div
            ref={animateTimelineRef}
            className={classes["process-timeline"]}
          ></div>
          <div
            ref={animateDotRef}
            className={classes["process-timeline-dot"]}
          ></div>
          {process &&
            process.map((processName, i) => {
              return (
                <div
                  key={i}
                  className={`${classes["sub-process"]} ${
                    classes[`${i % 2 === 0 ? "right" : "left"}-side`]
                  } ${
                    classes[
                      `${i % 2 === 0 ? "right" : "left"}-side-${
                        i + 1 <= 3 ? i + 1 : i + 1 - 3
                      }`
                    ]
                  }`}
                >
                  <div className={classes["timeline-dot"]}></div>
                  <div className={classes["path-info"]}>
                    <h4
                    // onMouseOver={onMouseOverHandler}
                    // onMouseOut={onMouseOutHandler}
                    >
                      {processName}
                    </h4>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temporincididunt ut labore et dolore magna
                      aliqua.
                    </p> */}
                  </div>
                </div>
              );
            })}
          {/* <div
            className={`${classes["sub-process"]} ${classes["right-side"]} ${classes["right-side-1"]}`}
          >
            <div className={classes["timeline-dot"]}></div>
            <div className={classes["path-info"]}>
              <h4
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                Lorem Ipsum
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporincididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div
            className={`${classes["sub-process"]} ${classes["left-side"]} ${classes["left-side-1"]}`}
          >
            <div className={classes["timeline-dot"]}></div>
            <div className={classes["path-info"]}>
              <h4
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                Lorem Ipsum
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporincididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div
            className={`${classes["sub-process"]} ${classes["right-side"]} ${classes["right-side-2"]}`}
          >
            <div className={classes["timeline-dot"]}></div>
            <div className={classes["path-info"]}>
              <h4
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                Lorem Ipsum
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporincididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div
            className={`${classes["sub-process"]} ${classes["left-side"]} ${classes["left-side-2"]}`}
          >
            <div className={classes["timeline-dot"]}></div>
            <div className={classes["path-info"]}>
              <h4
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                Lorem Ipsum
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporincididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div
            className={`${classes["sub-process"]} ${classes["right-side"]} ${classes["right-side-3"]}`}
          >
            <div className={classes["timeline-dot"]}></div>
            <div className={classes["path-info"]}>
              <h4
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                Lorem Ipsum
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporincididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div
            className={`${classes["sub-process"]} ${classes["left-side"]} ${classes["left-side-3"]}`}
          >
            <div className={classes["timeline-dot"]}></div>
            <div className={classes["path-info"]}>
              <h4
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                Lorem Ipsum
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporincididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
