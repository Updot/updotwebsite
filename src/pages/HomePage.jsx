import { Fragment } from "react";
// import Loading from "./components/landing/Landing";
import Home from "../components/home/Home";
import Featured from "../components/featured/Featured";
import Skills from "../components/skills/Skills";
import Clients from "../components/clients/Clients";
// import Faq from "./../components/faq/Faq";
// import Testimonial from "./../components/testimonial/Testimonial";
// import Connect from "./../components/connect/Connect";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import Header from "../components/ui/header/Header";

const HomePage = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />

      <Home showLogo={true} heading="We do things better at" />
      <Featured />
      <Skills />
      <Clients />
      {/* <Faq /> */}
      {/* <Testimonial /> */}
      {/* <Connect /> */}
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
