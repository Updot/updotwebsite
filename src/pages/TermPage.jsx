import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import Home from "./../components/home/Home";
import Term from "../components/term/Term";
import Header from "../components/ui/header/Header";

const TermPage = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />

      <Home heading="Terms and Conditions" fontSize="5.3rem" />
      <Term />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default TermPage;
