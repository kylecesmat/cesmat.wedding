import React from "react/addons";
let { PureRenderMixin } = React.addons;
import Fluxxor from "fluxxor";

import Page    from "../components/page/page";

let RSVPPage = React.createClass({

    mixins: [
        PureRenderMixin,
        Fluxxor.FluxMixin(React),
        Fluxxor.StoreWatchMixin("RSVP")
    ],

    getStateFromFlux() {
        return {
          rsvp : this.getFlux().store("RSVP").getRepos()
        };
    },

    componentDidMount() {
        this.getFlux().actions.RSVP.fetch('React');
    },

    handleOnClick()
    {
        this.getFlux().actions.RSVP.fetch('searchTerm');
        console.log(this.state.rsvp);
    },

    render() {
        return (
            <Page name='rsvp'>
                <button onClick={this.handleOnClick}>Fire!</button>
            </Page>
        );
    }
});

export default RSVPPage;
