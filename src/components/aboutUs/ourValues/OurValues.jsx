import Faq from "../../faq/Faq";
import faqData from "./valuesData.json";

import classes from "./OurValues.module.css";

const OurValues = () => {
  return (
    <div className={classes["our-values"]}>
      <Faq faqData={faqData} faqHeading="Our Core Values" />
    </div>
  );
};

export default OurValues;
