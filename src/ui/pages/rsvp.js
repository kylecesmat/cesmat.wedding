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
            showGuest      : false,
            showAttendance : true
        };
    },

    getStateFromFlux() {
        return {
            dataSubmitting : this.getFlux().store("rsvp").isDataSubmitting(),
            dataSuccess    : this.getFlux().store("rsvp").isDataSuccess()
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

    handleShowAttendance(value)
    {
        this.setState({showAttendance : value});
    },

    renderAttendanceButtons()
    {
        return (
            <div className='row rsvp__guest-select'>
                <div className='xsmall-6 columns'>
                    <RadioButton
                        id       = {'attendanceTrue'}
                        text     = {'I\'ll be there!'}
                        key      = {'attendanceTrue'}
                        name     = {'attendanceTrue'}
                        checked  = {this.state.showAttendance}
                        onChange = {_.partial(this.handleShowAttendance, true)}
                    />
                </div>
                <div className='xsmall-6 columns'>
                    <RadioButton
                        id       = {'attendanceFalse'}
                        text     = {'I can\'t make it'}
                        key      = {'attendanceFalse'}
                        name     = {'attendanceFalse'}
                        checked  = {! this.state.showAttendance}
                        onChange = {_.partial(this.handleShowAttendance, false)}
                    />
                </div>
            </div>
        );
    },

    renderGuestButtons()
    {
        return (
            <div className='row rsvp__guest-select'>
                <div className='xsmall-12 small-6 columns'>
                    <RadioButton
                        id       = {'guestFalse'}
                        text     = {'I\'m not bringing a guest'}
                        key      = {'guestFalse'}
                        name     = {'guestFalse'}
                        checked  = {! this.state.showGuest}
                        onChange = {_.partial(this.handleShowGuests, false)}
                    />
                </div>
                <div className='xsmall-12 small-6 columns'>
                    <RadioButton
                        id       = {'guestTrue'}
                        text     = {'I\'m bringing a guest(s)'}
                        key      = {'guestTrue'}
                        name     = {'guestTrue'}
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
                    label       = 'Name of Guest(s)'
                    placeholder = 'Name of Guest(s)'
                    name        = 'guestName'
                />
            </div>
        );
    },

    render() {
        let successMessage = (
            <div className='rsvp__success'>
                <span className='rsvp__success__message'>Thanks for your response!</span>
            </div>
        );

        return (
            <Page name='rsvp'>
                <h1 className='h2 text-center'>Join us for a night of celebration</h1>
                <form className='rsvp__form' ref='rsvpForm'>
                    <span className='p text-center'>Ceremony begins at 5:45PM, with a reception to follow. If a guest was included with your invitation, indicate their name(s) below.</span>
                    {this.state.dataSuccess ? successMessage : null}
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
                    {this.renderAttendanceButtons()}
                    {this.state.showAttendance ? this.renderGuestButtons() : null}
                    {this.state.showAttendance ? this.renderGuestName() : null}
                    <Button
                        disabled = {this.state.dataSubmitting}
                        onClick  = {this.submitForm}
                    >
                        {this.state.dataSubmitting ? 'Submitting...' : 'Submit your RSVP!'}
                    </Button>
                </form>
            </Page>
        );
    }
});

export default RSVPPage;
