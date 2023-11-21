import React from "react";
import { BrowseRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/Main";
import RepositoriesPage from './pages/RepositoriesPage'

export function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/repositories">
          <RepositoriesPage />
        </Route>
        <Route>
          <Route path="/" element={<MainPage />}/>
        </Route>
      </Switch>
    </Router>
  );
}
