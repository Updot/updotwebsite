import SectionHeading from "../ui/SectionHeading";
import ConnectForm from "./ConnectForm";

import classes from "./Connect.module.scss";

const Connect = () => {
  return (
    <section className={classes.connect}>
      <SectionHeading size="4rem">Let's Connect</SectionHeading>
      <div>
        <ConnectForm />
      </div>
    </section>
  );
};

export default Connect;
