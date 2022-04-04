import { Fragment, useEffect } from "react";

import SectionHeading from "../ui/SectionHeading";
import ContactForm from "./contactFrom/ContactForm";
// import Faq from "../faq/Faq";
// import ContactSocial from "./contactSocial/ContactSocial";
import TimeDate from "./timeDate/TimeDate";
import Map from "./map/Map";
import Footer from "../footer/Footer";
import classes from "./Contact.module.scss";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div
        className={classes["connect-area"]}
        // className="container  h-unset-mobile"
      >
        <SectionHeading size="7rem">Let's Connect</SectionHeading>
        <ContactForm />
      </div>
      {/* <Faq faqHeading="FAQ" /> */}
      {/* <ContactSocial /> */}
      <TimeDate />
      <Map />
      <Footer height="5vh" />
    </Fragment>
  );
};

export default Contact;
