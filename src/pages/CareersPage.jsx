import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Careers from "../components/careers/Careers";
// import { Route, Switch } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Newsletter from "../components/newsletter/Newsletter";
import Header from "../components/ui/header/Header";
import Nav from "../components/ui/nav/Nav";

const CareersPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isNavActive = useSelector((state) => state.navState.isActive);
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />
      {isNavActive && <Nav />}
      <Home isShowVideoHeading={false} heading="Careers" fontSize="5.3rem" />
      <Careers />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default CareersPage;
