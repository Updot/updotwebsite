import { Fragment } from "react";
import Home from "./../components/home/Home";
import OurStory from "../components/aboutUs/ourStory/OurStory";
import OurValues from "../components/aboutUs/ourValues/OurValues";
// import MasteredSkills from "../components/aboutUs/masteredSkills/MasteredSkills";
import Area from "../components/area/Area";
import Team from "../components/aboutUs/team/Team";
// import Connect from "./../components/connect/Connect";
import Header from "../components/ui/header/Header";
import Newsletter from "./../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

const About = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />
      <Home heading="About" fontSize="5.3rem" />
      <OurStory />
      <OurValues />
      {/* <MasteredSkills /> */}
      <Area />
      <Team />
      {/* <Connect /> */}
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default About;
