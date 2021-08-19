import SectionHeading from "../../ui/SectionHeading";

import classes from "./ContactSocial.module.css";
const ContactSocial = () => {
  return (
    <div className={classes["social-outer"]}>
      <SectionHeading>Let's Get A Little More Closer</SectionHeading>
      <div className={classes["social-container"]}>
        <a href="/">Google</a>
        <a href="/">Outlook</a>
        <a href="/">WhatsApp</a>
        <a href="/">Messenger</a>
      </div>
    </div>
  );
};

export default ContactSocial;
