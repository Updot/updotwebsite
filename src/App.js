import React, { useEffect, useState } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import GlobalProvider from "./context/globalContext";
import { ContactProvider, CareerProvider } from "./context/formContext";
import { SearchProvider } from "./context/searchContext";
import Landing from "./components/landing/Landing";
import Cookies from "./components/cookies/Cookies";
import Loader from "./components/ui/loader/Loader";
// import MouseArrow from "./components/ui/MouseArrow";
import CustomCursor from "./components/customCursor/customCursor";
import "./App.scss";
import { themeStateAction } from "./store/themeState";
// import Header from "./components/ui/header/Header";
import Nav from "./components/ui/nav/Nav";

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
    if (
      window.performance.navigation.type ===
      window.performance.navigation.TYPE_RELOAD
    ) {
      sessionStorage.removeItem("landingDisplayed");
    } else {
      setLandingDisplayed(true);
      sessionStorage.setItem("landingDisplayed", true);
    }
  }, []);
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
    <GlobalProvider>
      <SearchProvider>
        <CareerProvider>
          <ContactProvider>
            <div className="App">
              {/* <MouseArrow /> */}
              <CustomCursor />
              <Cookies />
              {/* {!landingDisplayed && window.innerWidth > 800 && (
              <Landing setLandingDisplayed={setLandingDisplayed} />
            )} */}

              <Nav />

              <React.Suspense fallback={<Loader />}>
                <Switch>
                  {window.innerWidth > 800 && (
                    <Route path="/" exact>
                      {!landingDisplayed && (
                        <Landing setLandingDisplayed={setLandingDisplayed} />
                      )}
                      <HomePage headerDisplayed={headerDisplayed} />
                    </Route>
                  )}
                  {window.innerWidth < 800 && (
                    <Route path="/" exact>
                      <HomePage headerDisplayed={headerDisplayed} />
                    </Route>
                  )}
                  <Route exact path="/about-us">
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
                  <Route path="*">
                    {location.pathname !== "/" && <NotFound />}
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
                    <feComposite
                      in="SourceGraphic"
                      in2="filter"
                      operator="atop"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </ContactProvider>
        </CareerProvider>
      </SearchProvider>
    </GlobalProvider>
  );
}

export default App;
