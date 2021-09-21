import SectionHeading from "../../ui/SectionHeading";
import classes from "./CareerPara.module.css";
const CareerPara = () => {
  return (
    <div className={`${classes["career-container"]} container`}>
      <SectionHeading>Lorem Ipsum</SectionHeading>
      <p className={classes["career-para"]}>
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

export default CareerPara;
