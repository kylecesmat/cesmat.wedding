import React   from "react";
import Page    from "../components/page/page";
let Fluxxor         = require("fluxxor");
let FluxMixin       = Fluxxor.FluxMixin(React);

let RSVPPage = React.createClass({

    mixins: [
        FluxMixin
    ],

    getStateFromFlux() {
        return {
            rsvp : this.getFlux().store("RSVP").getData()
        };
    },

    componentDidMount() {
        console.log(this.getFlux().actions);
    },

    handleOnClick()
    {
        this.getFlux().actions.RSVP.fetch('searchTerm');
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
