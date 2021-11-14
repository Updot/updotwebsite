import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Landing from "./components/landing/Landing";
import About from "./pages/About";
import Insights from "./pages/Insights";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import Cookies from "./components/cookies/Cookies";
import TermPage from "./pages/TermPage";
import PrivacyPage from "./pages/PrivacyPage";
import ServicesPage from "./pages/ServicesPage";
import CareersPage from "./pages/CareersPage";
import Loader from "./components/ui/loader/Loader";
import MouseArrow from "./components/ui/MouseArrow";
import "./App.css";
import { themeStateAction } from "./store/themeState";
import Header from "./components/ui/header/Header";
import Nav from "./components/ui/nav/Nav";

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
      <Header showNavBtn={true} headerDisplayed={headerDisplayed} />
      <Nav />
      {/* <Cookies /> */}
      <Switch>
        <Route path="/" exact>
          <Loading />
          <Home />
        </Route>
        <Route path="/about-us" exact>
          <Loading />
          <About />
        </Route>
        <Route path="/insights">
          <Loading />
          <Insights />
        </Route>
        <Route path="/work">
          <Loading />
          <WorkPage />
        </Route>
        <Route path="/contact">
          <Loading />
          <ContactPage />
        </Route>
        <Route path="/services">
          <Loading />
          <ServicesPage />
        </Route>
        <Route path="/careers">
          <Loading />
          <CareersPage />
        </Route>
        <Route path="/term-and-conditions">
          <Loading />
          <TermPage />
        </Route>
        <Route path="/privacy-policy">
          <Loading />
          <PrivacyPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
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
