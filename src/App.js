import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Landing from "./components/landing/Landing";
import Cookies from "./components/cookies/Cookies";
import Loader from "./components/ui/loader/Loader";
import MouseArrow from "./components/ui/MouseArrow";
import "./App.css";
import { themeStateAction } from "./store/themeState";
// import Header from "./components/ui/header/Header";
// import Nav from "./components/ui/nav/Nav";

const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const About = React.lazy(() => import("./pages/About"));
const WorkPage = React.lazy(() => import("./pages/WorkPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const TermPage = React.lazy(() => import("./pages/TermPage"));
const PrivacyPage = React.lazy(() => import("./pages/PrivacyPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const CareersPage = React.lazy(() => import("./pages/CareersPage"));
const Insights = React.lazy(() => import("./pages/Insights"));

const Loading = () => {
  const isLoaded = useSelector((state) => state.pageState.isLoaded);
  if (window.innerWidth > 800) {
    return <Landing />;
  } else {
    return !isLoaded && <Loader />;
  }
};

function App() {
  const dispatch = useDispatch();
  const [headerDisplayed, setHeaderDisplayed] = useState(true);
  useEffect(() => {
    const handler = (event) => {
      if (window.scrollY > 100) {
        setHeaderDisplayed(false);
      } else {
        setHeaderDisplayed(true);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [dispatch]);
  useEffect(() => {
    const theme = localStorage.getItem("updotThemePreference");
    if (theme === "Light") {
      dispatch(themeStateAction.toggleTheme());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <MouseArrow />
      {/* <Cookies /> */}
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <Loading />
            <Home headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/about-us" exact>
            <Loading />
            <About headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/insights" exact>
            <Loading />
            <Insights headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/work" exact>
            <Loading />
            <WorkPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/contact" exact>
            <Loading />
            <ContactPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/services" exact>
            <Loading />
            <ServicesPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/careers" exact>
            <Loading />
            <CareersPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/term-and-conditions" exact>
            <Loading />
            <TermPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/privacy-policy" exact>
            <Loading />
            <PrivacyPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </React.Suspense>
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="filter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="filter"
            />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;
