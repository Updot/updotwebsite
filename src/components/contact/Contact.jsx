import { Fragment, useEffect, useContext } from "react";

import SectionHeading from "../ui/SectionHeading";
import ContactForm from "./contactFrom/ContactForm";
// import Faq from "../faq/Faq";
// import ContactSocial from "./contactSocial/ContactSocial";
import TimeDate from "./timeDate/TimeDate";
import Map from "./map/Map";
import Footer from "../footer/Footer";
import ContactContext from "../../context/contactContext";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isFormTouched } = useContext(ContactContext);

  return (
    <Fragment>
      <div
        className="container  h-unset-mobile"
        style={{
          height: isFormTouched ? "" : "100vh",
        }}
      >
        <SectionHeading size="7rem">Let's Connect</SectionHeading>
        <ContactForm />
      </div>
      <TimeDate />
      <Map />
      <Footer height="5vh" />
    </Fragment>
  );
};

export default Contact;
