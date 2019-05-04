import React from "react";
import { Posts, PostDetails } from "./views";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/posts" />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:id" component={PostDetails} />
    </Switch>
  </BrowserRouter>
);
