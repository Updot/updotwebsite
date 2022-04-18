import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./../components/home/Home";
import Work from "../components/work/Work";
import Newsletter from "./../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import WorkBlog from "../components/work/workBlog/WorkBlog";
import Header from "../components/ui/header/Header";

const WorkPage = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />

      <Switch>
        <Route path="/work" exact>
          <Home heading="Work" fontSize="5.3rem" />
          <Work />
        </Route>
        <Route path="/work/:workId">
          <WorkBlog />
        </Route>
      </Switch>
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default WorkPage;
