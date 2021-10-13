import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import HomeComponent from "./../components/home/Home";
import MouseArrow from "../components/ui/MouseArrow";
import Privacy from "../components/privacy/Privacy";

const PrivacyPage = () => {
  return (
    <Fragment>
      <MouseArrow />
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
