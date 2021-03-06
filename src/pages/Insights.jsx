import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./../components/home/Home";
import Insight from "../components/insight/Insight";
import InsightBlog from "../components/insight/insigntBlog/InsightBlog";
// import Connect from "./../components/connect/Connect";
import Newsletter from "./../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import Header from "../components/ui/header/Header";

const Insights = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />

      <Switch>
        <Route path="/insights" exact>
          <Home heading="Insights" fontSize="5.3rem" />
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
