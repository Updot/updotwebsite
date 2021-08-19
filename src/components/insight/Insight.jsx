import InsightHeader from "./insightHeader/InsightHeader";
import InsightCard from "./insightCard/InsightCard";

import insightData from "./insightData.json";
import downArrow from "./../../assets/img/down-arrow.svg";

import classes from "./Insight.module.css";
const Insight = () => {
  return (
    <div className={`${classes["insight-container"]}`}>
      <InsightHeader />
      <div className={classes["insight-card-container"]}>
        {insightData.map((data, i) => (
          <InsightCard key={data.key} index={i} />
        ))}
        <a className={classes["insight-load-more"]} href="/">
          <span>Load More</span> <img src={downArrow} alt="down arrow" />
        </a>
      </div>
    </div>
  );
};

export default Insight;
