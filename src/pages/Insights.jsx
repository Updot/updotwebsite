import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import MouseArrow from "./../components/ui/MouseArrow";
import HomeComponent from "./../components/home/Home";
import Insight from "../components/insight/Insight";
import InsightBlog from "../components/insight/insigntBlog/InsightBlog";
// import Connect from "./../components/connect/Connect";
import Newsletter from "./../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
const Insights = () => {
  return (
    <Fragment>
      <MouseArrow />
      <Switch>
        <Route path="/insights" exact>
          <HomeComponent
            isShowVideoHeading={false}
            heading="Insights"
            fontSize="5.3rem"
          />
          <Insight />
        </Route>
        <Route path="/insights/:insightId">
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
