import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import "./App.css";
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

const Loading = () => {
  const isLoaded = useSelector((state) => state.pageState.isLoaded);
  if (window.innerWidth > 800) {
    return <Landing />;
  } else {
    return !isLoaded && <Loader />;
  }
};

function App() {
  return (
    <div className="App">
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
        <Route path="/insight">
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
