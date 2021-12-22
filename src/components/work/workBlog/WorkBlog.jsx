import { Fragment, useEffect, useState } from "react";
import { useHistory, useRouteMatch, useParams } from "react-router";
// import Home from "../../home/Home";
import BlogCard from "../../ui/blogCard/BlogCard";
import leftArrow from "./../../../assets/img/down-arrow.svg";
// import imageBigSample from "./../../../assets/img/image-big-sample.png";
// import imageSmallSample from "./../../../assets/img/image-small-sample.png";
import BlogContainer from "../../ui/blogContainer/BlogContainer";
import classes from "./WorkBlog.module.scss";
import BlogNavigateCard from "../../ui/blogCard/BlogNavigateCard";
import data from "./../work-data.json";
import BlogImage from "../../ui/blogCard/BlogImage";

const WorkBlog = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const params = useParams();

  const [blogData, setBlogData] = useState();
  const [image, setImage] = useState("");

  useEffect(() => {
    let bData = {};
    bData = data.filter((d) => d.key === params.workId)[0].data;
    setBlogData(bData);
    setImage(bData.intro_image);
  }, [params.workId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blogData) return <></>;

  const navigateLink = blogData.navigateLink;

  const onBackClickHandler = () => {
    history.push("/work");
  };

  const blogContent = blogData.content.map((ele, i) => {
    if (ele.para_only) {
      return (
        <BlogContainer key={i} paraOnly={true}>
          {ele.para}
        </BlogContainer>
      );
    } else {
      return <></>;
    }
    // else if (ele.image_only) {
    //   return (
    //     <BlogContainer imageOnly={ele.image_only} imageCount={ele.image_count}>
    //       {ele.images.map((image) => (
    //         <img className="mt-5" src={image} alt="" />
    //       ))}
    //     </BlogContainer>
    //   );
    // }
  });

  console.log(blogData);

  return (
    <Fragment>
      {/* <Home
        hideInner={true}
        heading={`${!!blogData ? blogData.title : "Work"}`}
      /> */}
      <div className={`${classes["blog"]}`}>
        <div className={classes["blog-container"]}>
          {window.innerWidth > 800 ? (
            <div className={classes["blog-info"]}>
              <BlogCard
                hideDefault={true}
                isColumn={window.innerWidth < 800 ? true : false}
                image={`work/${image}`}
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
                  <BlogImage isTrue={false} image={`work/${image}`} />
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
            image={`work/${blogData.navigateLink.next.image}`}
            isLeft={true}
            heading={navigateLink["next"].heading}
            link={`${match.path.split(":")[0]}${navigateLink["next"].link}`}
            type="next"
          />
        )}
        {navigateLink.hasOwnProperty("prev") && (
          <BlogNavigateCard
            image={`work/${blogData.navigateLink.prev.image}`}
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
