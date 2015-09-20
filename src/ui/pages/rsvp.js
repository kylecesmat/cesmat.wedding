import React from "react/addons";
let { PureRenderMixin } = React.addons;
import Fluxxor    from "fluxxor";
import InputGroup from "../components/form/input-group";
import Button     from "../components/form/button";

import Page    from "../components/page/page";

let RSVPPage = React.createClass({

    mixins: [
        PureRenderMixin,
        Fluxxor.FluxMixin(React),
        Fluxxor.StoreWatchMixin("rsvp")
    ],

    getInitialState() {
        return {
            showGuest : false
        };
    },

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
                <h1 className='h2 text-center'>Join us for a night of celebration</h1>
                <form className='rsvp__form' ref='rsvpForm'>
                    <span className='p'>Ceremony begins at 6PM, with a reception to follow. If a guest was included with your invitation, indicate their name below.</span>
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
                    <Button
                        onClick={this.submitForm}
                    >
                        Submit your RSVP!
                    </Button>
                </form>
            </Page>
        );
    }
});

export default RSVPPage;
