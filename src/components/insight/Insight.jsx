import BlogHeader from "../ui/blogHeader/BlogHeader";

import insightData from "./insightData.json";
import downArrow from "./../../assets/img/down-arrow.svg";

import classes from "./Insight.module.css";
import BlogCard from "../ui/blogCard/BlogCard";
const Insight = () => {
  return (
    <div className={`${classes["insight-container"]}`}>
      <BlogHeader navData={["Latest", "Most Popular"]} />
      <div className={classes["insight-card-container"]}>
        {insightData.map((data, i) => (
          <BlogCard key={data.key} index={i} heading={data.heading} />
        ))}
        <a className={classes["insight-load-more"]} href="/">
          <span>Load More</span> <img src={downArrow} alt="down arrow" />
        </a>
      </div>
    </div>
  );
};

export default Insight;
