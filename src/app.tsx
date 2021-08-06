import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./organizations.tsx/list";
import { DetailPage } from "./organizations.tsx/detail";
import { OrganizationProvider } from "./organizations.tsx/organization.context";
import { ListRickMorty } from "./rick-morty.tsx/list-rickymorty";
import { HomePage } from "./home.tsx/home-page";

export const App = () => {
  return (
    <Router>
      <OrganizationProvider>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/home-page">
          <HomePage />
        </Route>
        <Route exact path="/list-rickymorty">
          <ListRickMorty />
        </Route>
        <Route path="/list">
          <ListPage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>        
        <Route path="/details-rick-morty/:id">
          <DetailPage />
        </Route>
      </Switch>
      </OrganizationProvider>
    </Router>
  );
};
