import { useRef } from "react";
import { Link } from "react-router-dom";
import insightPlaceholder from "./../../../assets/img/insight-placeholder.png";
import rightArrow from "./../../../assets/img/right-arrow.svg";
import classes from "./InsightCard.module.css";
const InsightCard = (props) => {
  const dotRef = useRef(null);
  const isTrue = parseInt((props.index + 1) / 2) === (props.index + 1) / 2;
  const style = isTrue
    ? {
        flexDirection: "row-reverse",
        paddingLeft: "7.5vw",
        justifyContent: "flex-start",
        columnGap: "5vw",
      }
    : {
        flexDirection: "row",
        paddingRight: "7.5vw",
      };
  const animateClass = isTrue
    ? `${classes["insight-dot-animate-even"]}`
    : `${classes["insight-dot-animate-odd"]}`;

  const onMouseOverHandler = () => {
    console.log(dotRef.current.getBoundingClientRect());
  };
  return (
    <div className={classes["insight-card"]} mask style={style}>
      <div className={`${classes["insight-img-container"]} mask`}>
        <div className={`${classes["insight-img-inner"]} ${animateClass}`}>
          <img
            src={insightPlaceholder}
            alt="insightperson"
            onMouseOver={onMouseOverHandler}
          />
          <div ref={dotRef} className={classes["dot"]}></div>
        </div>
      </div>
      {!props.hideDefault && (
        <Link
          to="/insight/insight-test"
          className={classes["insight-heading-container"]}
          style={isTrue ? { textAlign: "right" } : {}}
        >
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
          <img
            style={isTrue ? { marginRight: "12%" } : {}}
            src={rightArrow}
            alt="right arrow"
          />
        </Link>
      )}
      {props.hideDefault && props.children}
    </div>
  );
};

export default InsightCard;
