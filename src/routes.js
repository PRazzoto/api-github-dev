import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/Main";
import RepositoriesPage from "./pages/RepositoriesPage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/:login/repositories">
          <RepositoriesPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
