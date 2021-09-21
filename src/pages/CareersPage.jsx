import { Fragment } from "react";
import Careers from "../components/careers/Careers";
// import { Route, Switch } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Newsletter from "../components/newsletter/Newsletter";
import MouseArrow from "../components/ui/MouseArrow";

const CareersPage = () => {
  return (
    <Fragment>
      <MouseArrow />
      <Home isShowVideoHeading={false} heading="Careers" />
      <Careers />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default CareersPage;
