import React from "react/addons"; // eslint-disable-line
import {Route, Redirect} from "react-router";

import App          from "./ui/layouts/app";
import HomePage     from "./ui/pages/home";
import VenuePage    from "./ui/pages/venue";
import RSVPPage     from "./ui/pages/rsvp";
import RegistryPage from "./ui/pages/registry";

export default (
  <Route name="App" path="/" handler={App}>
    <Route name="home" path="/home" handler={HomePage} />
    <Route name="venue" path="/venue" handler={VenuePage} />
    <Route name="registry" path="/registry" handler={RegistryPage} />
    <Route name="rsvp" path="/rsvp" handler={RSVPPage} />
    <Redirect from="/" to="home" />
  </Route>
);
