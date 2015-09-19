import React from "react/addons";
let { PureRenderMixin } = React.addons;
import Fluxxor from "fluxxor";
import InputGroup from "../components/form/input-group";

import Page    from "../components/page/page";

let RSVPPage = React.createClass({

    mixins: [
        PureRenderMixin,
        Fluxxor.FluxMixin(React),
        Fluxxor.StoreWatchMixin("rsvp")
    ],

    getStateFromFlux() {
        return {
            rsvpFormStatus : this.getFlux().store("rsvp").rsvpFormStatus()
        };
    },

    submitForm(event)
    {
        event.preventDefault();
        this.getFlux().actions.rsvp.fetch(this.refs.rsvpForm.getDOMNode());
    },

    render() {
        return (
            <Page name='rsvp'>
                <form ref='rsvpForm'>
                    <InputGroup
                        label       = 'First Name'
                        placeholder = 'First Name'
                        name        = 'firstName'
                    />
                    <InputGroup
                        label       = 'Last Name'
                        placeholder = 'Last Name'
                        name        = 'lastName'
                    />
                    <InputGroup
                        label       = 'Bringing a Guest?'
                        placeholder = 'Yes/No'
                        name        = 'guest'
                    />
                    <InputGroup
                        label       = 'First Name of Guest'
                        placeholder = 'First Name'
                        name        = 'guestFirstName'
                    />
                    <InputGroup
                        label       = 'Last Name of Guest'
                        placeholder = 'Last Name'
                        name        = 'guestLastName'
                    />
                    <button onClick={this.submitForm}>Submit</button>
                </form>
            </Page>
        );
    }
});

export default RSVPPage;
