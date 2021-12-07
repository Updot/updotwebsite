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
  return (
    <li>
      <div className={classes["faq-qn-container"]}>
        <h4 className={classes["faq-qn"]} onClick={faqClickHandler}>
          <span>{props.qn}</span>
          <span className={classes["faq-arrow"]}>
            <img
              src={ArrowImg}
              alt="arrow img"
              style={{
                transform: isExpended ? "rotate(-180deg)" : "",
              }}
            />
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
