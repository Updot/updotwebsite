import { Fragment } from "react";
// import Loading from "./components/landing/Landing";
import MouseArrow from "./../components/ui/MouseArrow";
import HomeComponent from "./../components/home/Home";
import Featured from "../components/featured/Featured";
import Skills from "./../components/skills/Skills";
import Clients from "../components/clients/Clients";
// import Faq from "./../components/faq/Faq";
// import Testimonial from "./../components/testimonial/Testimonial";
import Connect from "./../components/connect/Connect";
import Newsletter from "./../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <MouseArrow />
      <HomeComponent
        isShowVideoHeading={true}
        heading="Lorem ipsum dolor sit"
      />
      <Featured />
      <Skills />
      <Clients />
      {/* <Faq /> */}
      {/* <Testimonial /> */}
      <Connect />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
