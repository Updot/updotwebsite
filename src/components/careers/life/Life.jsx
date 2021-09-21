import Faq from "../../faq/Faq";
import lifeFaqData from "./lifeData.json";

import classes from "./Life.module.css";

const Life = () => {
  return (
    <div className={classes["life"]}>
      <Faq faqData={lifeFaqData} faqHeading="Life at Updot" />
    </div>
  );
};

export default Life;
