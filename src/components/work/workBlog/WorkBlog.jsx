import { Fragment, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import Home from "../../home/Home";
import BlogCard from "../../ui/blogCard/BlogCard";
import leftArrow from "./../../../assets/img/down-arrow.svg";
import imageBigSample from "./../../../assets/img/image-big-sample.png";
import imageSmallSample from "./../../../assets/img/image-small-sample.png";
import BlogContainer from "../../ui/blogContainer/BlogContainer";
import classes from "./WorkBlog.module.css";
import BlogNavigateCard from "../../ui/blogCard/BlogNavigateCard";
import blogData from "./data.json";
import BlogImage from "../../ui/blogCard/BlogImage";

const WorkBlog = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const navigateLink = blogData.navigateLink;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigateLink]);

  const onBackClickHandler = () => {
    history.push("/work");
  };
  const blogContent = blogData.content.map((data) => {
    if (data.para_only) {
      return <BlogContainer paraOnly={true}>{data.para}</BlogContainer>;
    } else if (data.image_only) {
      return (
        <BlogContainer
          imageOnly={data.image_only}
          imageCount={data.image_count}
        >
          {data.images.map((image) => (
            <img className="mt-5" src={image} alt="" />
          ))}
        </BlogContainer>
      );
    }
  });
  return (
    <Fragment>
      <Home hideInner={true} />
      <div className={`${classes["blog"]}`}>
        <div className={classes["blog-container"]}>
          {window.innerWidth > 800 ? (
            <div className={classes["blog-info"]}>
              <BlogCard
                hideDefault={true}
                isColumn={window.innerWidth < 800 ? true : false}
              >
                <div className={classes["blog-info-inner"]}>
                  <div className={classes["blog-header"]}>
                    <h1>{blogData.title}</h1>
                    <button
                      className={classes["back"]}
                      onClick={onBackClickHandler}
                    >
                      <img src={leftArrow} alt="arrow" />
                    </button>
                  </div>

                  <p>{blogData.intro_para}</p>
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
                  <h1>{blogData.title}</h1>
                  <button
                    className={classes["back"]}
                    onClick={onBackClickHandler}
                  >
                    <img src={leftArrow} alt="arrow" />
                  </button>
                </div>
              </div>
              <BlogContainer paraOnly={true}>
                {blogData.intro_para}
              </BlogContainer>
            </div>
          )}
          {blogContent}
          <div className={`${classes["vb-btn"]} container-2`}>
            <button className="btn">Visit Website</button>
          </div>
        </div>
      </div>
      <div className={classes["blog-navigate-container"]}>
        {navigateLink.hasOwnProperty("next") && (
          <BlogNavigateCard
            isLeft={true}
            heading={navigateLink["next"].heading}
            link={`${match.path.split(":")[0]}${navigateLink["next"].link}`}
            type="next"
          />
        )}
        {navigateLink.hasOwnProperty("prev") && (
          <BlogNavigateCard
            isLeft={false}
            link={`${match.path.split(":")[0]}${navigateLink["prev"].link}`}
            heading={navigateLink["prev"].heading}
            type="previous"
          />
        )}
      </div>
    </Fragment>
  );
};

export default WorkBlog;
