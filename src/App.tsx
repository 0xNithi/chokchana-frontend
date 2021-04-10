import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";

const history = createBrowserHistory();

const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App: React.FC = () => {
  const { componentMounted } = useTheme();

  if (!componentMounted) return <div />;

  return (
    <Router history={history}>
      <Navbar />
      <React.Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default React.memo(App);
