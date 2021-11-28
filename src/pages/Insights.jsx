import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "./../components/home/Home";
import Insight from "../components/insight/Insight";
import InsightBlog from "../components/insight/insigntBlog/InsightBlog";
// import Connect from "./../components/connect/Connect";
import Newsletter from "./../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import Header from "../components/ui/header/Header";
import Nav from "../components/ui/nav/Nav";
import { useSelector } from "react-redux";

const Insights = (props) => {
  const isNavActive = useSelector((state) => state.navState.isActive);

  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />
      {isNavActive && <Nav />}
      <Switch>
        <Route path="/insights" exact>
          <HomeComponent
            isShowVideoHeading={false}
            heading="Insights"
            fontSize="5.3rem"
          />
          <Insight />
        </Route>
        <Route path="/insights/:insightId" exact>
          <InsightBlog />
        </Route>
      </Switch>
      {/* <Connect /> */}
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Insights;
