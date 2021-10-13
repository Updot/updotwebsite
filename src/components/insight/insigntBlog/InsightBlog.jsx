import { Fragment, useEffect } from "react";
import { useHistory } from "react-router";
import Home from "../../home/Home";
import BlogCard from "../../ui/blogCard/BlogCard";
import leftArrow from "./../../../assets/img/down-arrow.svg";
import emptyRect1 from "./../../../assets/img/empty-rect-1.svg";
import emptyRect2 from "./../../../assets/img/empty-rect-2.svg";
import bar from "./../../../assets/img/bar.svg";
import BlogContainer from "../../ui/blogContainer/BlogContainer";
import BlogImage from "../../ui/blogCard/BlogImage";
import classes from "./InsightBlog.module.css";

const InsightBlog = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onBackClickHandler = () => {
    history.goBack();
  };

  const flow = window.innerWidth > 800 ? "row" : "column-reverse";
  const flowReverse =
    window.innerWidth > 800 ? "row-reverse" : "column-reverse";
  return (
    <Fragment>
      <Home hideInner={true} />
      <div className={`${classes["blog"]}`}>
        <div className={classes["blog-container"]}>
          {window.innerWidth > 800 ? (
            <div className={classes["blog-info"]}>
              <BlogCard hideDefault={true}>
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
                    do eiusmod temporincididunt na aliqua. Lorem ipsum Lorem
                    ipsum dolor sit amet, consecteturadip iscing elit, sed do
                    eiusmod temporincididunt na aliqua. Lorem ipsum Lorem ipsum
                    dolor sit amet, consecteturadip iscing elit, sed do eiusmod
                    temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor
                    sit amet, consecteturadip iscing elit, sed do eiusmod
                    temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor
                    sit amet, consecteturadip iscing elit, sed do eiusmod
                    temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor
                    sit amet, consecteturadip iscing elit, sed do eiusmod
                    temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor
                    sit amet, consecteturadip iscing elit, sed do eiusmod
                    temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor
                    sit amet, consecteturadip iscing elit, sed do eiusmod
                    temporincididunt na aliqua. Lorem ipsum Lorem ipsum dolor
                    sit amet, consecteturadip iscing elit.
                  </p>
                </div>
              </BlogCard>
            </div>
          ) : (
            <div>
              <div className={classes["mobile-header"]}>
                <div className={classes["mobile-header-image"]}>
                  <BlogImage isTrue={false} />
                </div>
                <div className={classes["blog-header"]}>
                  <div className={classes["blog-header-top"]}>
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
                </div>
              </div>
              <BlogContainer paraOnly={true}>
                Lorem ipsum dolor sit amet, consect eturadip iscing elit, sed do
                eiusmod temporincididunt na aliqua. Lorem Lorem ipsum dolor sit
                amet, consect eturadip iscing elit, sed do eiusmod
                temporincididunt na aliqua. Lorem Lorem ipsum dolor sit amet,
                consect eturadip iscing elit, sed do eiusmod temporincididunt na
                aliqua. Lorem Lorem ipsum dolor sit amet, consect eturadip
                iscing elit, sed do eiusmod temporincididunt na aliqua. Lorem
                Lorem ipsum dolor sit amet, consect eturadip iscing elit, sed do
                eiusmod temporincididunt na aliqua. Lorem Lorem ipsum dolor sit
                amet, consect eturadip iscing elit, sed do eiusmod
                temporincididunt na aliqua. Lorem Lorem ipsum dolor sit amet,
                consect eturadip iscing elit, sed do eiusmod temporincididunt na
                aliqua. Lorem Lorem ipsum dolor sit amet, consect eturadip
                iscing elit, sed do eiusmod temporincididunt na aliqua,
              </BlogContainer>
            </div>
          )}
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
            img={emptyRect1}
            paraOnly={false}
            flow={flow}
            margin="0 0 1rem"
          >
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
          <BlogContainer
            img={emptyRect2}
            paraOnly={false}
            flow={flowReverse}
            margin="0 0 1rem"
          >
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
            flow={flowReverse}
            align="end"
            marginBottom={window.innerWidth > 800 ? 70 : 20}
            margin="0 0 1rem"
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
