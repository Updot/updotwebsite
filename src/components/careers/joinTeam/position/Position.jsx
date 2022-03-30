import { Fragment, useEffect, useRef, useState } from "react";
import SectionHeading from "../../../ui/SectionHeading";
import classes from "./Position.module.scss";
import mouse from "../../../../assets/img/mouse.svg";
import cross from "../../../../assets/img/cross-apply-now.svg";
import arrowLeft from "../../../../assets/img/arrow-left.svg";
import arrowRight from "../../../../assets/img/arrow-right.svg";
import ApplyForm from "./applyForm/ApplyForm";
import Developer from "./images/Developer";
import Marketing from "./images/Marketing";

const Position = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [positions, setPositions] = useState([]);
  const mouseRef = useRef(null);
  let count = 0;

  useEffect(() => {
    const timeStamp = window.innerWidth > 800 ? 1000 : 2000;
    const interval = setInterval(() => {
      const x =
        window.innerWidth > 800
          ? Math.random() * 100
          : window.innerWidth > 600
          ? Math.random() * 500
          : Math.random() * 200;
      const y = Math.random() * 50;
      mouseRef.current.style.top = `-${y}px`;
      mouseRef.current.style.left = `${x}px`;
    }, timeStamp);
    // setInterval(() => {
    //   const x = Math.random() * 100;
    //   const y = Math.random() * 20;
    //   mouseRef.current.style.top = `${y}px`;
    //   mouseRef.current.style.left = `${x}px`;
    // }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onLeftClickHandler = () => {
    if (!isShowForm) {
      const position = document.querySelector(`.${classes["position"]}`);

      const singlePositionHeight = position.getBoundingClientRect().width;
      if (count > 0) {
        count = count - 1;
        position.scroll(singlePositionHeight * count, 0);
      }
    }
  };
  const onRightClickHandler = () => {
    if (!isShowForm) {
      const position = document.querySelector(`.${classes["position"]}`);

      const singlePositionHeight = position.getBoundingClientRect().width;
      const elementCount = position.childElementCount;
      if (count < elementCount - 1) {
        count += 1;
        position.scroll(singlePositionHeight * count, 0);
      }
    }
  };
  return (
    <Fragment>
      <div className={classes["position"]}>
        <div className={classes["position-container"]}>
          <div className={classes["position-container-left"]}>
            <SectionHeading size="5.5rem">Creative Designer</SectionHeading>{" "}
            {window.innerWidth <= 800 && (
              <div className={classes["position-container-right"]}>
                <img ref={mouseRef} src={mouse} alt="" />
              </div>
            )}
            <p>
              We need an expert who is versed in softwares such as Illustrator,
              Photoshop or even Corel Draw with enough experience to handle our
              work pressure.. lol! Just Kiddin' XD.
            </p>
            <div className={classes["position-bottom"]}>
              {!isShowForm && (
                <button
                  className="btn"
                  onClick={() => {
                    setIsShowForm((prevState) => !prevState);
                    setPositions([
                      "Graphic Designer",
                      "UI/UX designer",
                      "Product Designer",
                    ]);
                  }}
                >
                  Apply Now
                </button>
              )}
              {!isShowForm && window.innerWidth < 800 && (
                <div className={classes["btn-container"]}>
                  <img
                    onClick={onLeftClickHandler}
                    src={arrowLeft}
                    alt="arrow left"
                  />

                  <img
                    src={arrowRight}
                    alt="arrow right"
                    onClick={onRightClickHandler}
                  />
                </div>
              )}
            </div>
          </div>
          {window.innerWidth > 800 && (
            <div className={classes["position-container-right"]}>
              <img ref={mouseRef} src={mouse} alt="" />
            </div>
          )}
        </div>
        <div className={classes["position-container"]}>
          <div className={classes["position-container-left"]}>
            <SectionHeading size="5.5rem">
              Digital Marketing Analyst
            </SectionHeading>{" "}
            {window.innerWidth <= 800 && (
              <div className={classes["position-container-right"]}>
                {/* <img src={marketing} alt="" /> */}

                <div className={classes["right-image-container"]}>
                  <Marketing />
                </div>
              </div>
            )}
            <p>
              Can you even sell air if given the right platform? We’ve got a
              seat to fill if you can
            </p>
            <div className={classes["position-bottom"]}>
              {!isShowForm && (
                <button
                  className="btn"
                  onClick={() => {
                    setIsShowForm((prevState) => !prevState);
                    setPositions([
                      "SEO Specialist",
                      "Digital Marketing",
                      "Social media marketing",
                    ]);
                  }}
                >
                  Apply Now
                </button>
              )}
              {!isShowForm && window.innerWidth < 800 && (
                <div className={classes["btn-container"]}>
                  <img
                    onClick={onLeftClickHandler}
                    src={arrowLeft}
                    alt="arrow left"
                  />

                  <img
                    src={arrowRight}
                    alt="arrow right"
                    onClick={onRightClickHandler}
                  />
                </div>
              )}
            </div>
          </div>
          {window.innerWidth > 800 && (
            <div className={classes["position-container-right"]}>
              {/* <img src={marketing} alt="" /> */}
              <div className={classes["image-container"]}>
                <Marketing />
              </div>
            </div>
          )}
        </div>
        <div className={classes["position-container"]}>
          <div className={classes["position-container-left"]}>
            <SectionHeading size="5.5rem">Front-end Developer</SectionHeading>{" "}
            {window.innerWidth <= 800 && (
              <div className={classes["position-container-right"]}>
                {/* <img src={developer} alt="" /> */}
                <div className={classes["right-image-container"]}>
                  <Developer />
                </div>
              </div>
            )}
            <p>
              We always have a place for proficient and top-notch web and app
              developers. Do you speak code? If you do, then you my friend, are
              at the place.
            </p>
            <div className={classes["position-bottom"]}>
              {!isShowForm && (
                <button
                  className="btn"
                  onClick={() => {
                    setIsShowForm((prevState) => !prevState);
                    setPositions(["Web Developer", "App Developer"]);
                  }}
                >
                  Apply Now
                </button>
              )}
              {!isShowForm && window.innerWidth < 800 && (
                <div className={classes["btn-container"]}>
                  <img
                    onClick={onLeftClickHandler}
                    src={arrowLeft}
                    alt="arrow left"
                  />

                  <img
                    src={arrowRight}
                    alt="arrow right"
                    onClick={onRightClickHandler}
                  />
                </div>
              )}
            </div>
          </div>
          {window.innerWidth > 800 && (
            <div className={classes["position-container-right"]}>
              {/* <img src={developer} alt="" /> */}
              <div className={classes["image-container"]}>
                <Developer />
              </div>
            </div>
          )}
        </div>
      </div>
      {window.innerWidth > 800 && (
        <div
          className={
            isShowForm
              ? `${classes["btn-container"]} ${classes["btn-container-animate"]}`
              : classes["btn-container"]
          }
          onClick={() => isShowForm && setIsShowForm(false)}
        >
          <img onClick={onLeftClickHandler} src={arrowLeft} alt="arrow left" />

          <img
            src={arrowRight}
            alt="arrow right"
            onClick={onRightClickHandler}
          />
        </div>
      )}
      {isShowForm && (
        <div
          className={`${classes["btn-container"]} ${classes["btn-container-2"]}`}
        >
          <h4>Apply Now</h4>
          {window.innerWidth <= 800 && (
            <button onClick={() => setIsShowForm(false)}>
              <img src={cross} alt="cross" />
            </button>
          )}
        </div>
      )}
      {isShowForm && (
        <div className={classes["form-container"]}>
          <ApplyForm positions={positions} />
        </div>
      )}
    </Fragment>
  );
};

export default Position;
