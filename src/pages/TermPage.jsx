import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import HomeComponent from "./../components/home/Home";
import MouseArrow from "../components/ui/MouseArrow";
import Term from "../components/term/Term";

const TermPage = () => {
  return (
    <Fragment>
      <MouseArrow />
      <HomeComponent
        isShowVideoHeading={false}
        heading="Terms and Conditions"
      />
      <Term />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default TermPage;
