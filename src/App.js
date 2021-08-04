import { Route, Switch } from "react-router";

import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
