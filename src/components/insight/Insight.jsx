import { useEffect, useState } from "react";
import BlogHeader from "../ui/blogHeader/BlogHeader";

import insightData from "./insightData.json";
import downArrow from "./../../assets/img/down-arrow.svg";

import classes from "./Insight.module.scss";
import BlogCard from "../ui/blogCard/BlogCard";

let insightCount = 0;

const Insight = () => {
  const [insightCards, setInsightCards] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(1);

  useEffect(() => {
    let els = insightData.map((data, i) => {
      insightCount++;
      return (
        <BlogCard
          key={data.key}
          index={insightCount - 1}
          insightId={`i${insightCount}`}
          heading={data.heading}
        />
      );
    });
    setInsightCards((prevState) => [...prevState, ...els]);
  }, [loadMoreCount]);

  return (
    <div className={`${classes["insight-container"]}`}>
      <BlogHeader navData={["Latest", "Most Viewed"]} />
      <div className={classes["insight-card-container"]}>
        {insightCards}
        <button
          className={`${classes["insight-load-more"]} btn`}
          onClick={() => {
            setLoadMoreCount((prevCount) => prevCount + 1);
          }}
        >
          <span>Load More</span> <img src={downArrow} alt="down arrow" />
        </button>
      </div>
    </div>
  );
};

export default Insight;
