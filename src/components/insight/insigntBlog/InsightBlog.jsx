import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Home from "../../home/Home";
import BlogCard from "../../ui/blogCard/BlogCard";
import leftArrow from "./../../../assets/img/down-arrow.svg";
// import emptyRect1 from "./../../../assets/img/empty-rect-1.svg";
// import emptyRect2 from "./../../../assets/img/empty-rect-2.svg";
// import bar from "./../../../assets/img/bar.svg";
import BlogContainer from "../../ui/blogContainer/BlogContainer";
import BlogImage from "../../ui/blogCard/BlogImage";

import data from "../insightData.json";

import classes from "./InsightBlog.module.scss";

const InsightBlog = () => {
  const history = useHistory();
  const param = useParams();

  const [blogData, setBlogData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filterData = data.filter((d) => d.key === param["insightId"]);
    setBlogData(filterData[0].data);
  }, [param]);

  const onBackClickHandler = () => {
    history.goBack();
  };

  const flow = window.innerWidth > 800 ? "row" : "column-reverse";
  const flowReverse =
    window.innerWidth > 800 ? "row-reverse" : "column-reverse";

  let blogContent = [];
  if (blogData) {
    blogContent = blogData.content.map((ele, i) => {
      if (ele.para_only) {
        return (
          <BlogContainer key={i} paraOnly={true}>
            {ele.para}
          </BlogContainer>
        );
      } else if (ele.para.length > 250) {
        return (
          <BlogContainer
            key={i}
            img={ele.image}
            paraOnly={ele.para_only}
            flow={ele.image_left ? flowReverse : flow}
            margin="0 0 1rem"
          >
            {ele.para}
          </BlogContainer>
        );
      } else {
        return <></>;
      }
      // else {
      //     return (
      //       <BlogContainer
      //         img={ele.image}
      //         paraOnly={ele.para_only}
      //         flow={ele.image_left ? flowReverse : flow}
      //         margin="0 0 1rem"
      //         align="end"
      //         marginBottom={window.innerWidth > 800 ? 70 : 20}
      //       >
      //         {ele.para}
      //       </BlogContainer>
      //     );
      //   }
    });
  }

  if (!blogData) return <Fragment></Fragment>;

  return (
    <Fragment>
      <Home
        hideInner={true}
        heading={`${!!blogData ? blogData.title : "Insights"}`}
      />
      <div className={`${classes["blog"]}`}>
        <div className={classes["blog-container"]}>
          {window.innerWidth > 800 ? (
            <div className={classes["blog-info"]}>
              <BlogCard
                hideDefault={true}
                image={`insights/${blogData.intro_image}`}
              >
                <div className={classes["blog-info-inner"]}>
                  <div className={classes["blog-header"]}>
                    <button
                      className={classes["back"]}
                      onClick={onBackClickHandler}
                    >
                      <img src={leftArrow} alt="arrow" />
                    </button>
                  </div>
                  <div className={classes["blog-meta"]}>
                    <h3>{blogData.title}</h3>
                    <h5>
                      by {blogData.author}, {blogData.date}
                    </h5>
                  </div>
                  <p
                    style={{ width: `${window.innerWidth > 800 ? "98%" : ""}` }}
                  >
                    {blogData.intro_para}
                  </p>
                </div>
              </BlogCard>
            </div>
          ) : (
            <div>
              <div className={classes["mobile-header"]}>
                <div className={classes["mobile-header-image"]}>
                  <BlogImage
                    image={`insights/${blogData.intro_image}`}
                    isTrue={false}
                  />
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
                    <h3>{blogData.title}</h3>
                    <h5>
                      by {blogData.author}, {blogData.date}
                    </h5>
                  </div>
                </div>
              </div>
              <BlogContainer paraOnly={true}>
                {blogData.intro_para}
              </BlogContainer>
            </div>
          )}
          {blogContent}
        </div>
      </div>
    </Fragment>
  );
};

export default InsightBlog;
