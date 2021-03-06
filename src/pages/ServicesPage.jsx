import { Fragment } from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../components/home/Home";
import Service from "../components/services/Service";
import Header from "../components/ui/header/Header";

const ServicesPage = (props) => {
  return (
    <Fragment>
      <Header showNavBtn={true} headerDisplayed={props.headerDisplayed} />

      <Switch>
        <Route path="/services" exact>
          <Home
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
