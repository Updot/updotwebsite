import { Fragment } from "react";
import HomeComponent from "../components/home/Home";
import Contact from "../components/contact/Contact";

const ContactPage = () => {
  return (
    <Fragment>
      <HomeComponent
        isShowVideoHeading={false}
        heading="Contact"
        fontSize="5.3rem"
      />
      <Contact />
    </Fragment>
  );
};

export default ContactPage;
