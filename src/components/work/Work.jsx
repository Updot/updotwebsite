import BlogHeader from "../ui/blogHeader/BlogHeader";
import BlogCard from "../ui/blogCard/BlogCard";

import workData from "./work-data.json";
import downArrow from "./../../assets/img/down-arrow.svg";

import classes from "./Work.module.css";
import { useEffect, useState } from "react";
let cardCount = 0;
const Work = () => {
  const [workCards, setWorkCards] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const cards = workData.map((data, i) => {
      cardCount += 1;
      return (
        <BlogCard
          key={data.key}
          index={i}
          heading={`${data.heading}${cardCount}`}
          workId={data.key}
          arrowInline={true}
          isArrowLeftMargin={true}
          // image={} have to enable
        />
      );
    });
    setWorkCards(cards);
  }, [pageNumber]);
  return (
    <div className={`${classes["work-container"]}`}>
      <BlogHeader navData={["A-Z", "Date"]} />
      <div className={classes["work-card-container"]}>
        {workCards}
        <div className={classes["nav-btn-container"]}>
          <button
            className={`${classes["nav-btn"]} ${classes["prev-btn"]}`}
            onClick={() => {
              setPageNumber((prevNum) => (prevNum > 1 ? prevNum - 1 : prevNum));
              cardCount -= 3;
              window.scrollTo(0, window.innerHeight + 200);
            }}
          >
            <img src={downArrow} alt="down arrow" /> <span>Previous</span>
          </button>
          <button
            className={`${classes["nav-btn"]} ${classes["nxt-btn"]}`}
            onClick={() => {
              setPageNumber((prevNum) => prevNum + 1);
              window.scrollTo(0, window.innerHeight + 200);
            }}
          >
            <span>Next</span> <img src={downArrow} alt="down arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
