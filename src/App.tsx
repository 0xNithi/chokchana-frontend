import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";

const history = createBrowserHistory();

const Home = React.lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  const { componentMounted } = useTheme();

  if (!componentMounted) return <div />;

  return (
    <>
      <Navbar />
      <Router history={history}>
        <React.Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </React.Suspense>
      </Router>
    </>
  );
};

export default App;
