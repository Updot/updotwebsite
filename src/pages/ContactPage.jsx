import { Fragment } from "react";
import Home from "../components/home/Home";
import Contact from "../components/contact/Contact";
import Header from "../components/ui/header/Header";

const ContactPage = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />

      <Home heading="Contact" fontSize="5.3rem" />
      <Contact />
    </Fragment>
  );
};

export default ContactPage;
