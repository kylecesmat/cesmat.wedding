import React from "react/addons"; // eslint-disable-line
import {Route, Redirect} from "react-router";

import App       from "./ui/layouts/app";
import HomePage  from "./ui/pages/home";
import VenuePage from "./ui/pages/venue";

export default (
  <Route name="App" path="/" handler={App}>
    <Route name="HomePage" path="home" handler={HomePage} />
    <Route name="VenuePage" path="venue" handler={VenuePage} />
    <Redirect from="/" to="HomePage" />
  </Route>
);
