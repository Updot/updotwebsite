import { Fragment } from "react";
import MouseArrow from "../components/ui/MouseArrow";
import HomeComponent from "../components/home/Home";
import Contact from "../components/contact/Contact";

const ContactPage = () => {
  return (
    <Fragment>
      <MouseArrow />
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
