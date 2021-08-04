import SectionHeading from "../ui/SectionHeading";
import ConnectForm from "./ConnectForm";

import classes from "./Connect.module.css";

const Connect = () => {
  return (
    <section className={classes.connect}>
      <SectionHeading>Let's Connect</SectionHeading>
      <div>
        <ConnectForm />
      </div>
    </section>
  );
};

export default Connect;
