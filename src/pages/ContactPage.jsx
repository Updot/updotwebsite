import { Fragment } from "react";
import Home from "../components/home/Home";
import Contact from "../components/contact/Contact";
import Header from "../components/ui/header/Header";
import Nav from "../components/ui/nav/Nav";
import { useSelector } from "react-redux";

const ContactPage = (props) => {
  const isNavActive = useSelector((state) => state.navState.isActive);
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />
      {isNavActive && <Nav />}
      <Home heading="Contact" fontSize="5.3rem" />
      <Contact />
    </Fragment>
  );
};

export default ContactPage;
