import Faq from "../../faq/Faq";
import { lifeData } from "./lifeData.js";

import classes from "./Life.module.scss";

const Life = () => {
  return (
    <div className={classes["life"]}>
      <Faq faqData={lifeData} faqHeading="Life at Updot" />
    </div>
  );
};

export default Life;
