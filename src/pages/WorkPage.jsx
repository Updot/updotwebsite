import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import MouseArrow from "./../components/ui/MouseArrow";
import HomeComponent from "./../components/home/Home";
import Work from "../components/work/Work";

import Newsletter from "./../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import WorkBlog from "../components/work/workBlog/WorkBlog";
const WorkPage = () => {
  return (
    <Fragment>
      <MouseArrow />
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
