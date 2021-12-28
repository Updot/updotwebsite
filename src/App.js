import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Landing from "./components/landing/Landing";
import Cookies from "./components/cookies/Cookies";
import Loader from "./components/ui/loader/Loader";
import MouseArrow from "./components/ui/MouseArrow";
import "./App.scss";
import { themeStateAction } from "./store/themeState";
// import Header from "./components/ui/header/Header";
// import Nav from "./components/ui/nav/Nav";

import HomePage from "./pages/HomePage";

const NotFound = React.lazy(() => import("./pages/NotFound"));
const About = React.lazy(() => import("./pages/About"));
const WorkPage = React.lazy(() => import("./pages/WorkPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const TermPage = React.lazy(() => import("./pages/TermPage"));
const PrivacyPage = React.lazy(() => import("./pages/PrivacyPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const CareersPage = React.lazy(() => import("./pages/CareersPage"));
const Insights = React.lazy(() => import("./pages/Insights"));

function App() {
  const dispatch = useDispatch();
  const [headerDisplayed, setHeaderDisplayed] = useState(true);
  const [landingDisplayed, setLandingDisplayed] = useState(false);

  const location = useLocation();

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

  // Disable both in development
  // temp warning surpass for installed packages where package using old dependencies
  console.log = () => {};
  console.warn = () => {};
  // temp error removel
  console.error = () => {};
  return (
    <div className="App">
      <MouseArrow />
      <Cookies />
      {!landingDisplayed && window.innerWidth > 800 && (
        <Landing setLandingDisplayed={setLandingDisplayed} />
      )}
      <Route path="/" exact>
        <HomePage headerDisplayed={headerDisplayed} />
      </Route>
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/about-us">
            <About headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/insights">
            <Insights headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/work">
            <WorkPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/contact">
            <ContactPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/services">
            <ServicesPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/careers">
            <CareersPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/term-and-conditions">
            <TermPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPage headerDisplayed={headerDisplayed} />
          </Route>
          <Route path="*">{location.pathname !== "/" && <NotFound />}</Route>
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
