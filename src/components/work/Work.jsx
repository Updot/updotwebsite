import BlogHeader from "../ui/blogHeader/BlogHeader";
import BlogCard from "../ui/blogCard/BlogCard";
import SearchContext from "../../context/searchContext";

import workData from "./work-data.json";
import downArrow from "./../../assets/img/down-arrow.svg";

import classes from "./Work.module.scss";
import { useEffect, useState, useContext } from "react";

let cardCount = 0;

const Work = () => {
  const [workCards, setWorkCards] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { handleCaseSearch, caseState, caseStudy } = useContext(SearchContext);

  useEffect(() => {
    let data = caseStudy.length === 0 ? workData : caseStudy;
    const cards = data.map((data, i) => {
      cardCount += 1;
      return (
        <BlogCard
          key={data.key}
          index={i}
          heading={`${data.heading}`}
          workId={data.key}
          arrowInline={true}
          isArrowLeftMargin={true}
          image={`work/${data.image}`}
        />
      );
    });
    setWorkCards(cards);
  }, [pageNumber, caseStudy]);

  return (
    <div className={`${classes["work-container"]}`}>
      <BlogHeader
        handleSearch={handleCaseSearch}
        searchState={caseState}
        navData={["A-Z", "Date"]}
      />
      <div className={classes["work-card-container"]}>
        {workCards}
        <div className={classes["nav-btn-container"]}>
          <button
            className={`${classes["nav-btn"]} ${classes["prev-btn"]}`}
            onClick={() => {
              setPageNumber((prevNum) => (prevNum > 1 ? prevNum - 1 : prevNum));
              cardCount = cardCount - 3;
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
