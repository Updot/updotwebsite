import SectionHeading from "../../ui/SectionHeading";

import gmailIcon from "../../../assets/img/contact/gmail.svg";
import whatsappIcon from "../../../assets/img/contact/Whatsapp.svg";
import outlookIcon from "../../../assets/img/contact/Outlook.svg";
import telegramIcon from "../../../assets/img/contact/telegram.svg";

import classes from "./ContactSocial.module.scss";
const ContactSocial = () => {
  return (
    <div className={classes["social-outer"]}>
      {window.innerWidth > 800 ? (
        <SectionHeading>Let's Get A Little More Closer</SectionHeading>
      ) : (
        <SectionHeading>
          Let's Get <br /> A Little More Closer
        </SectionHeading>
      )}
      <div className={classes["social-container"]}>
        {/* <a href="/">
          <img src={gmailIcon} alt="gmail icon" />
        </a> */}
        {/* <a href="/">
          <img src={outlookIcon} alt="outlook icon" />
        </a> */}
        <a href="/" style={{ transform: "translateY(10px)" }}>
          <img src={whatsappIcon} alt="" />
        </a>
        <a href="/" style={{ transform: "translateY(12px)" }}>
          <img src={telegramIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ContactSocial;
