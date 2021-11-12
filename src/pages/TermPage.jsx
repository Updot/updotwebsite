import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import HomeComponent from "./../components/home/Home";
import Term from "../components/term/Term";

const TermPage = () => {
  return (
    <Fragment>
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
