import { useState } from "react";
import classes from "./FaqItem.module.scss";
import ArrowImg from "../../assets/img/faq/arrow.svg";

const FaqItem = (props) => {
  const [isExpended, setIsExpended] = useState(false);
  const faqClickHandler = (event) => {
    setIsExpended((prevState) => !prevState);
  };
  const faqAnsClass = isExpended
    ? `${classes["faq-ans-container"]} ${classes["faq-ans-expend"]}`
    : `${classes["faq-ans-container"]}`;
  const faqGridAnsClass = isExpended
    ? `${classes["faq-ans-container"]} ${classes["faq-grid-ans-expend"]}`
    : `${classes["faq-ans-container"]}`;
  console.log(props.numId);
  return (
    <>
      {props.componentOf === "about" ? (
        <li className={classes["faq-qn-main"]}>
          <div className={classes["faq-qn-container"]}>
            <div className={classes["faq-col"]} onClick={faqClickHandler}>
              <span
                className={classes["faq-numId"]}
                // style={{
                //   display: isExpended ? "none" : "block",
                // }}
              >
                {props.numId}
              </span>
              <span
                className={classes["faq-col-qn"]}
                style={{
                  color: isExpended ? "#fff" : "#BEBEBE",
                }}
              >
                {props.qn}
              </span>
            </div>
          </div>
          <div className={faqGridAnsClass}>
            <p className={classes["faq-grid-ans"]}>{props.ans}</p>
          </div>
        </li>
      ) : (
        <li className={classes["faq-qn-main"]}>
          <div className={classes["faq-qn-container"]}>
            <h4 className={classes["faq-qn"]} onClick={faqClickHandler}>
              {props.img && (
                <span
                  className={classes["faq-arrow"]}
                  style={{
                    backgroundColor: isExpended ? "#fff" : "",
                  }}
                >
                  <img
                    src={props.img}
                    alt="arrow img"
                    style={{
                      filter: isExpended ? "invert(1)" : "invert(0)",
                    }}
                  />
                </span>
              )}
              <span
                style={{
                  color: isExpended ? "#fff" : "#BEBEBE",
                }}
              >
                {props.qn}
              </span>
            </h4>
          </div>
          <div className={faqAnsClass}>
            <p className={classes["faq-ans"]}>{props.ans}</p>
          </div>
        </li>
      )}
    </>
  );
};

export default FaqItem;
