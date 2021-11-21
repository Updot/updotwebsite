import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "./../components/home/Home";
import Work from "../components/work/Work";

import Newsletter from "./../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import WorkBlog from "../components/work/workBlog/WorkBlog";
import Header from "../components/ui/header/Header";
import Nav from "../components/ui/nav/Nav";
const WorkPage = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />
      <Nav />

      <Switch>
        <Route path="/work" exact>
          <HomeComponent
            isShowVideoHeading={false}
            heading="Work"
            fontSize="5.3rem"
          />
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
