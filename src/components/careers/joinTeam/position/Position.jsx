import { Fragment, useState } from "react";
import SectionHeading from "../../../ui/SectionHeading";
import classes from "./Position.module.css";
import mouse from "../../../../assets/img/mouse.svg";
import developer from "../../../../assets/img/developer.svg";
import marketing from "../../../../assets/img/marketing.svg";
import arrowLeft from "../../../../assets/img/arrow-left.svg";
import arrowRight from "../../../../assets/img/arrow-right.svg";
import ApplyForm from "./applyForm/ApplyForm";

const Position = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  let count = 0;
  const onLeftClickHandler = () => {
    const position = document.querySelector(`.${classes["position"]}`);

    const singlePositionHeight = position.getBoundingClientRect().width;
    if (count > 0) {
      count = count - 1;
      position.scroll(singlePositionHeight * count, 0);
    }
  };
  const onRightClickHandler = () => {
    const position = document.querySelector(`.${classes["position"]}`);

    console.log(position.getBoundingClientRect().width);
    const singlePositionHeight = position.getBoundingClientRect().width;
    const elementCount = position.childElementCount;
    if (count < elementCount - 1) {
      count += 1;
      position.scroll(singlePositionHeight * count, 0);
    }
  };
  return (
    <Fragment>
      <div className={classes["position"]}>
        <div className={classes["position-container"]}>
          <div className={classes["position-container-left"]}>
            <SectionHeading size="5.5rem">Graphic Designer</SectionHeading>
            <p>
              We need an expert with designing software like Illustrator,
              Photoshop or even Corel Draw with enough experience to handle our
              work pressure.. lol! Just Kiddin' XD.
            </p>
            {!isShowForm && (
              <button
                className="btn"
                onClick={() => setIsShowForm((prevState) => !prevState)}
              >
                Apply Now
              </button>
            )}
          </div>
          <div className={classes["position-container-right"]}>
            <img src={mouse} alt="" />
          </div>
        </div>
        <div className={classes["position-container"]}>
          <div className={classes["position-container-left"]}>
            <SectionHeading size="5.5rem">Marketing</SectionHeading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporinc ididunt ut labore et dolore magna aliqua.
            </p>
            {!isShowForm && (
              <button
                className="btn"
                onClick={() => setIsShowForm((prevState) => !prevState)}
              >
                Apply Now
              </button>
            )}
          </div>
          <div className={classes["position-container-right"]}>
            <img src={marketing} alt="" />
          </div>
        </div>
        <div className={classes["position-container"]}>
          <div className={classes["position-container-left"]}>
            <SectionHeading size="5.5rem">Developer</SectionHeading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporinc ididunt ut labore et dolore magna aliqua.
            </p>

            {!isShowForm && (
              <button
                className="btn"
                onClick={() => setIsShowForm((prevState) => !prevState)}
              >
                Apply Now
              </button>
            )}
          </div>
          <div className={classes["position-container-right"]}>
            <img src={developer} alt="" />
          </div>
        </div>
      </div>
      {!isShowForm && (
        <div className={classes["btn-container"]}>
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
          <button onClick={() => setIsShowForm(false)}>&#10005;</button>
        </div>
      )}
      {isShowForm && (
        <div className={classes["form-container"]}>
          <ApplyForm />
        </div>
      )}
    </Fragment>
  );
};

export default Position;
