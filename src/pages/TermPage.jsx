import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import Home from "./../components/home/Home";
import Term from "../components/term/Term";
import Header from "../components/ui/header/Header";
import Nav from "../components/ui/nav/Nav";
import { useSelector } from "react-redux";

const TermPage = (props) => {
  const isNavActive = useSelector((state) => state.navState.isActive);
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />
      {isNavActive && <Nav />}
      <Home heading="Terms and Conditions" fontSize="5.3rem" />
      <Term />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default TermPage;
