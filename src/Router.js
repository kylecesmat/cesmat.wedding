import React from "react/addons"; // eslint-disable-line
import {Route, Redirect} from "react-router";

import App       from "./ui/layouts/app";
import HomePage  from "./ui/pages/home";
import VenuePage from "./ui/pages/venue";

export default (
  <Route name="App" path="/" handler={App}>
    <Route name="home" path="/home" handler={HomePage} />
    <Route name="venue" path="/venue" handler={VenuePage} />
    <Redirect from="/" to="home" />
  </Route>
);
