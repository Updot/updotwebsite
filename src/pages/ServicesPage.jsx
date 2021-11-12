import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../components/home/Home";
import Service from "../components/services/Service";

const ServicesPage = () => {
  return (
    <Fragment>
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
          <Service />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default ServicesPage;
