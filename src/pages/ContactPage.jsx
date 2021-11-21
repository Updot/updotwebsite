import { Fragment } from "react";
import HomeComponent from "../components/home/Home";
import Contact from "../components/contact/Contact";
import Header from "../components/ui/header/Header";
import Nav from "../components/ui/nav/Nav";

const ContactPage = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />
      <Nav />
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
