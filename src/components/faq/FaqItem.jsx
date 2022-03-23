import { useState } from "react";
import classes from "./FaqItem.module.scss";
import ArrowImg from "../../assets/img/faq/arrow.svg";

const FaqItem = (props) => {
  console.log(props);
  const [isExpended, setIsExpended] = useState(false);
  const faqClickHandler = (event) => {
    setIsExpended((prevState) => !prevState);
  };
  const faqAnsClass = isExpended
    ? `${classes["faq-ans-container"]} ${classes["faq-ans-expend"]}`
    : `${classes["faq-ans-container"]}`;

  return (
    <li className={classes["faq-qn-main"]}>
      <div className={classes["faq-qn-container"]}>
        <h4 className={classes["faq-qn"]} onClick={faqClickHandler}>
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
  );
};

export default FaqItem;
