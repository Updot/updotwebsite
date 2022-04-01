import { useEffect, useState, useContext } from "react";
import BlogHeader from "../ui/blogHeader/BlogHeader";
import SearchContext from "../../context/searchContext";

import insightData from "./insightData.json";
import downArrow from "./../../assets/img/down-arrow.svg";

import classes from "./Insight.module.scss";
import BlogCard from "../ui/blogCard/BlogCard";

let insightCount = 0;

const Insight = () => {
  const [insightCards, setInsightCards] = useState([]);
  // const [loadMoreCount, setLoadMoreCount] = useState(1);

  const { handleInsightSearch, insightState, insight } =
    useContext(SearchContext);

  useEffect(() => {
    let allData = insight.length === 0 ? insightData : insight;
    console.log(allData);
    const els = allData.map((item, i) => {
      insightCount += 1;
      return (
        <BlogCard
          key={item.key}
          index={i}
          insightId={item.key}
          heading={item.heading}
          image={`insights/${item.data.intro_image}`}
          arrowInline={true}
          isArrowLeftMargin={true}
        />
      );
    });
    setInsightCards(els);
  }, [insight]);

  return (
    <div className={`${classes["insight-container"]}`}>
      <BlogHeader
        handleSearch={handleInsightSearch}
        searchState={insightState}
        navData={["Latest"]}
      />
      <div className={classes["insight-card-container"]}>
        {insightCards}
        <button
          className={`${classes["insight-load-more"]} btn`}
          onClick={() => {
            // setLoadMoreCount((prevCount) => prevCount + 1);
          }}
        >
          <span>Load More</span> <img src={downArrow} alt="down arrow" />
        </button>
      </div>
    </div>
  );
};

export default Insight;
