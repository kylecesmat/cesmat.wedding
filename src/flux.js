let React   = require("react/addons");
let Fluxxor = require("fluxxor");
let stores  = require("./flux/stores");
let actions = require("./flux/actions");

let flux    = new Fluxxor.Flux(stores, actions);

window.flux = flux;

flux.setDispatchInterceptor((action, dispatch) => {
    React.addons.batchedUpdates(() => {
        dispatch(action);
    });
});


