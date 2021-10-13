import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Newsletter from "../components/newsletter/Newsletter";
import Services from "../components/services/Services";
import MouseArrow from "../components/ui/MouseArrow";

const ServicesPage = () => {
  return (
    <Fragment>
      <MouseArrow />
      <Switch>
        <Route path="/services" exact>
          <Home
            isShowVideoHeading={false}
            heading="Services"
            isNotScroll={true}
            isPadding={true}
            fontSize="5.3rem"
            textCenter={true}
          />
        </Route>
        <Route path="/services/:serviceId" exact>
          <Home
            isShowVideoHeading={false}
            heading="Services"
            service="Web Development"
            fontSize="5.5rem"
          />
          <Services />
          <Newsletter />
          <Footer />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default ServicesPage;
