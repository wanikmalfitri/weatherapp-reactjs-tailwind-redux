import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Cities, City, NotFound } from "../pages";
import { Layout } from "../components";

const routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/city">
            <Cities />
          </Route>
          <Route exact path="/city/:id">
            <City />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default routes;
