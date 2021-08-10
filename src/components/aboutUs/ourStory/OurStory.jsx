import SectionHeading from "../../ui/SectionHeading";
import classes from "./OurStory.module.css";
const OurStory = () => {
  return (
    <div className={`${classes["stroy-container"]} container`}>
      <SectionHeading>Our Origin Story</SectionHeading>
      <p className={classes["story-para"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        temporincididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut
        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore
        magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod temporincididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default OurStory;
