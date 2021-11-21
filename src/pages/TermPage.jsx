import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import HomeComponent from "./../components/home/Home";
import Term from "../components/term/Term";
import Header from "../components/ui/header/Header";
import Nav from "../components/ui/nav/Nav";

const TermPage = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />
      <Nav />
      <HomeComponent
        isShowVideoHeading={false}
        heading="Terms and Conditions"
        fontSize="5.3rem"
      />
      <Term />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default TermPage;
