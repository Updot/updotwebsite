import Faq from "../../faq/Faq";
import faqData from "./valuesData.json";

import classes from "./OurValues.module.scss";

const OurValues = () => {
  return (
    <div className={classes["our-values"]}>
      <Faq componentOf="about" faqData={faqData} faqHeading="Our Core Values" />
    </div>
  );
};

export default OurValues;
