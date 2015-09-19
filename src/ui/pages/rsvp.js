import React from "react/addons";
let { PureRenderMixin } = React.addons;
import Fluxxor    from "fluxxor";
import InputGroup from "../components/form/input-group";
import Page       from "../components/page/page";

let RSVPPage = React.createClass({

    mixins: [
        PureRenderMixin,
        Fluxxor.FluxMixin(React)
    ],

    SubmitForm()
    {
        this.getFlux().actions.rsvp.fetch(this.refs.rsvpForm.getDOMNode());
    },

    render() {
        return (
            <Page name='rsvp'>
                <form ref='rsvpForm'>
                    <InputGroup
                        label       = 'First Name'
                        placeholder = 'First Name'
                        name        = 'fname'
                    />
                    <InputGroup
                        label       = 'Last Name'
                        placeholder = 'Last Name'
                        name        = 'lname'
                    />
                    <button onClick={this.submitForm}>Fire!</button>
                </form>
            </Page>
        );
    }
});

export default RSVPPage;
