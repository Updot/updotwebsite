import BlogHeader from "../ui/blogHeader/BlogHeader";
import BlogCard from "../ui/blogCard/BlogCard";

import workData from "./work-data.json";
import downArrow from "./../../assets/img/down-arrow.svg";

import classes from "./Work.module.css";
const Work = () => {
  return (
    <div className={`${classes["work-container"]}`}>
      <BlogHeader navData={["A-Z", "Date"]} />
      <div className={classes["work-card-container"]}>
        {workData.map((data, i) => (
          <BlogCard
            key={data.key}
            index={i}
            heading={data.heading}
            workId={data.key}
            arrowInline={true}
            isArrowLeftMargin={true}
            // image={} have to enable
          />
        ))}
        <div className={classes["nav-btn-container"]}>
          <button className={`${classes["nav-btn"]} ${classes["prev-btn"]}`}>
            <img src={downArrow} alt="down arrow" /> <span>Previous</span>
          </button>
          <button className={`${classes["nav-btn"]} ${classes["nxt-btn"]}`}>
            <span>Next</span> <img src={downArrow} alt="down arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
