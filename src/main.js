let React          = require('react');
let BatchedUpdates = require('react/lib/ReactUpdates').batchedUpdates;

import Router from "react-router";
import routes from "./Router";

let Flux   = require('./flux');

window.React = React; /* To enable Chrome react plugin */
React.initializeTouchEvents(true);

let flux        = new Flux();
let oldDispatch = flux.dispatcher.dispatch.bind(flux.dispatcher);

flux.dispatcher.dispatch = action => new BatchedUpdates(() => {
    oldDispatch(action);
});

// mount app
document.addEventListener("DOMContentLoaded", () => {
    Router.run(routes, Handler => {
        React.render(<Handler flux={flux} />, document.body);
    });
});


