import { Fragment, useEffect, useRef } from "react";
import Skill from "../skills/Skill";
import Technology from "../technology/Tech";
import webDevIcon from "../../assets/img/skills/webdev-icon.svg";
import classes from "./Services.module.scss";
import SectionHeading from "../ui/SectionHeading";

const Services = (props) => {
  const animateDotRef = useRef(null);
  const processContainerRef = useRef(null);
  const animateTimelineRef = useRef(null);
  const desc = props.data.desc;
  const process = props.data.process;
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
        <Skill img={webDevIcon} skillData={{ desc }} isPadding={window < 800} />
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
