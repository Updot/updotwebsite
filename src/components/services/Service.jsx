import { Fragment, useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import Home from "../home/Home";
import Services from "./Services";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";

import serviceData from "./serviceData.json";

const Service = () => {
  const route = useRouteMatch();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(serviceData[route.params.serviceId]);
  }, [route.params.serviceId]);
  return (
    <Fragment>
      <Home
        isShowVideoHeading={false}
        heading="Services"
        service={data.name}
        fontSize="5.5rem"
      />
      <Services data={data} />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Service;
