import SectionHeading from "../../ui/SectionHeading";
import classes from "./CareerPara.module.css";
const CareerPara = () => {
  return (
    <div className={`${classes["career-container"]} container`}>
      <SectionHeading>The big Turnaround</SectionHeading>
      <p className={classes["career-para"]}>
        Join our team at Updot to test the boundaries by igniting your passion.
        Work together with a bunch of polished and inspiring young minds in the
        field. People say our recruitment process is really tough. Why don’t you
        try and prove them wrong?
      </p>
    </div>
  );
};

export default CareerPara;
