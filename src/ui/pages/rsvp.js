import React from "react/addons";
let { PureRenderMixin } = React.addons;
import Fluxxor    from "fluxxor";
import InputGroup from "../components/form/input-group";
import Button     from "../components/form/button";
import RadioButton from "../components/form/radio-button";
import Page    from "../components/page/page";
import _ from 'lodash';

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

    handleShowGuests(value)
    {
        this.setState({showGuest : value});
    },

    renderGuestButtons()
    {
        return (
            <div className='row rsvp__guest-select'>
                <div className='small-6 columns'>
                    <RadioButton
                        id       = {'guest--false'}
                        text     = {'I\'m not bringing a guest'}
                        key      = {'guest--false'}
                        name     = {'guest--false'}
                        checked  = {! this.state.showGuest}
                        onChange = {_.partial(this.handleShowGuests, false)}
                    />
                </div>
                <div className='small-6 columns'>
                    <RadioButton
                        id       = {'guest--true'}
                        text     = {'I\'m bringing a guest'}
                        key      = {'guest--true'}
                        name     = {'guest--true'}
                        checked  = {this.state.showGuest}
                        onChange = {_.partial(this.handleShowGuests, true)}
                    />
                </div>
            </div>
        );
    },

    renderGuestName()
    {
        if(! this.state.showGuest) {
            return null;
        }

        return (
            <div className='rsvp__guest-information'>
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
            </div>
        );
    },

    render() {
        return (
            <Page name='rsvp'>
                <h1 className='h2 text-center'>Join us for a night of celebration</h1>
                <form className='rsvp__form' ref='rsvpForm'>
                    <span className='p'>Ceremony begins at 5:45PM, with a reception to follow. If a guest was included with your invitation, indicate their name below.</span>
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
                    {this.renderGuestButtons()}
                    {this.renderGuestName()}
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
