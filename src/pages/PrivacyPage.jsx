import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import Home from "./../components/home/Home";
import Privacy from "../components/privacy/Privacy";
import Header from "../components/ui/header/Header";

const PrivacyPage = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />

      <Home heading="Privacy Policy" fontSize="5.3rem" />
      <Privacy />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default PrivacyPage;
