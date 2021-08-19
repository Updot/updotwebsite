import { Fragment, useEffect } from "react";
import { useHistory } from "react-router";
import Home from "../../home/Home";
import InsightCard from "../insightCard/InsightCard";
import leftArrow from "./../../../assets/img/down-arrow.svg";
import emptyRect1 from "./../../../assets/img/empty-rect-1.svg";
import emptyRect2 from "./../../../assets/img/empty-rect-2.svg";
import bar from "./../../../assets/img/bar.svg";
import BlogContainer from "./blogContainer/BlogContainer";
import classes from "./InsightBlog.module.css";

const InsightBlog = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onBackClickHandler = () => {
    history.goBack();
  };

  return (
    <Fragment>
      <Home hideInner={true} />
      <div className={`${classes["blog"]}`}>
        <div className={classes["blog-container"]}>
          <div className={classes["blog-info"]}>
            <InsightCard hideDefault={true}>
              <div className={classes["blog-info-inner"]}>
                <div className={classes["blog-header"]}>
                  <h1>Insight</h1>
                  <button
                    className={classes["back"]}
                    onClick={onBackClickHandler}
                  >
                    <img src={leftArrow} alt="arrow" />
                  </button>
                </div>
                <div className={classes["blog-meta"]}>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h3>
                  <h5>by Lorem Ipsum, XX-XX-20XX</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consecteturadip iscing elit, sed
                  do eiusmod temporincididunt na aliqua. Lorem ipsum Lorem ipsum
                  dolor sit amet, consecteturadip iscing elit, sed do eiusmod
                  temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor sit
                  amet, consecteturadip iscing elit, sed do eiusmod
                  temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor sit
                  amet, consecteturadip iscing elit, sed do eiusmod
                  temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor sit
                  amet, consecteturadip iscing elit, sed do eiusmod
                  temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor sit
                  amet, consecteturadip iscing elit, sed do eiusmod
                  temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor sit
                  amet, consecteturadip iscing elit, sed do eiusmod
                  temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor sit
                  amet, consecteturadip iscing elit, sed do eiusmod
                  temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor sit
                  amet, consecteturadip iscing elit.
                </p>
              </div>
            </InsightCard>
          </div>
          <BlogContainer paraOnly={true}>
            Lorem ipsum dolor sit amet, consecteturadip iscing elitsed do
            eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua.
          </BlogContainer>
          <BlogContainer img={emptyRect1} paraOnly={false} flow="row">
            Lorem ipsum dolor sit amet, consecteturadip iscing elit, sed do
            eiusmod temporincididunt na aliqua. Lorem ips Lorem ipsum dolor sit
            amet, consecteturadip iscing elit, sed do eiusmod temporincididunt
            na aliqua. Lorem ips Lorem ipsum dolor sit amet, consecteturadip
            iscing elit, sed do eiusmod temporincididunt na aliqua. Lorem ips
            Lorem ipsum dolor sit amet, consecteturadip iscing elit, sed do
            eiusmod temporincididunt na aliqua. Lorem ips Lorem ipsum dolor sit
            amet, consecteturadip iscing elit, sed do eiusmod temporincididunt
            na aliqua. Lorem ips Lorem ipsum dolor sit amet, consecteturadip
            iscing elit, sed do eiusmod temporincididunt na aliqua. Lorem ips
            Lorem ipsum dolor sit amet, consecteturadip iscing elit, Lorem ipsum
            dolor sit amet, consecteturadip iscing elit, sed do eiusmod
            temporincididunt na aliqua. Lorem ips Lorem ipsum dolor sit amet,
            consecteturadip iscing elit, sed do eiusmod temporincididunt na
            aliqua. Lorem ips Lorem ipsum dolor sit amet, consecteturadip iscing
            elit, sed do eiusmod temporincididunt na aliqua. Lorem ips Lorem
            ipsum dolor sit amet, consecteturadip iscing elit, sed do eiusmod
            temporincididunt na aliqua. Lorem ips Lorem ipsum dolor sit amet,
            consecteturadip iscing elit, sed do eiusmod temporincididunt na
            aliqua. Lorem ips Lorem ipsum dolor sit amet, consecteturadip iscing
            elit, sed do eiusmod temporincididunt na aliqua. Lorem ip.
          </BlogContainer>
          <BlogContainer paraOnly={true}>
            Lorem ipsum dolor sit amet, consecteturadip iscing elitsed do
            eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua.
          </BlogContainer>
          <BlogContainer img={emptyRect2} paraOnly={false} flow="row-reverse">
            Lorem ipsum dolor sit amet, consecteturadip iscing elit, sed do
            eiusmod temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor
            sit amet, consecteturadip iscing elit, sed do eiusmod
            temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor sit amet,
            consecteturadip iscing elit, sed do eiusmod temporincididunt na
            aliqua. Lorem ipsum Lorem ipsum dolor sit amet, consecteturadip
            iscing elit, sed do eiusmod temporincididunt na aliqua. Lorem ipsum
            Lorem ipsum dolor sit amet, consecteturadip iscing elit, sed do
            eiusmod temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor
            sit amet, consecteturadip iscing elit, sed do eiusmod
            temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor sit amet,
            consecteturadip iscing elit, sed do eiusmod temporincididunt na
            aliqua. Lorem ipsum Lorem ipsum dolor sit amet, consecteturadip
            iscing elit, sed do eiusmod temporincididunt na aliqua. Lorem ipsum
            Lorem ipsum dolor sit amet, consecteturadip iscing elit.
          </BlogContainer>
          <BlogContainer paraOnly={true}>
            Lorem ipsum dolor sit amet, consecteturadip iscing elitsed do
            eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua.
          </BlogContainer>
          <BlogContainer
            img={bar}
            paraOnly={false}
            flow="row-reverse"
            align="end"
            marginBottom={70}
          >
            Lorem ipsum dolor sit amet, consecteturadip iscing elit, sed do
            eiusmod temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor
            sit amet, consecteturadip iscing elit,
          </BlogContainer>
          <BlogContainer paraOnly={true}>
            Lorem ipsum dolor sit amet, consecteturadip iscing elitsed do
            eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua. Lorem ipsum dolor sit amet, consecteturadip iscing elitsed
            do eiusmod temporincididunt na aliqua. Lorem ipsum dolor sit amet,
            consecteturadip iscing elitsed do eiusmod temporincididunt na
            aliqua.
          </BlogContainer>
        </div>
      </div>
    </Fragment>
  );
};

export default InsightBlog;
