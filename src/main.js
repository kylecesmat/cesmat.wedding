import React  from "react/addons";
import flux   from "./flux";
import Router from "react-router";
import routes from "./Router";

// debugging
window.React = React; /* To enable Chrome react plugin */
React.initializeTouchEvents(true);

// mount app
document.addEventListener("DOMContentLoaded", () => {
    Router.run(routes, Handler => {
        React.render(<Handler flux={flux} />, document.body);
    });
});
