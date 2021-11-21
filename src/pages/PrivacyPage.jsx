import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import HomeComponent from "./../components/home/Home";
import Privacy from "../components/privacy/Privacy";
import Header from "../components/ui/header/Header";
import Nav from "../components/ui/nav/Nav";
import { useSelector } from "react-redux";

const PrivacyPage = (props) => {
  const isNavActive = useSelector((state) => state.navState.isActive);
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />
      {isNavActive && <Nav />}
      <HomeComponent
        isShowVideoHeading={false}
        heading="Privacy Policy"
        fontSize="5.3rem"
      />
      <Privacy />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default PrivacyPage;
