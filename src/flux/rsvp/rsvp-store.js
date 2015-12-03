import Fluxxor from "fluxxor";
import C       from "../constants";

let RSVPStore = Fluxxor.createStore({
    init()
    {
        this._data = [];
        this.dataFailure = false;
        this.dataSubmitting = false;
        this.dataSuccess = false;
    },

    initialize()
    {
        this.init();

        this.bindActions(
            C.GSHEETS.SUBMIT_FORM_SUBMITTING, this.handleDataSubmitting,
            C.GSHEETS.SUBMIT_FORM_FAILURE, this.handleDataFailure,
            C.GSHEETS.SUBMIT_FORM_SUCCESS, this.handleReceiveDataSuccess
        );
    },

    rsvpFormStatus()
    {
        return true;
    },

    handleDataSubmitting()
    {
        this.dataSuccess    = false;
        this.dataFailure    = false;
        this.dataSubmitting = true;

        this.emit("change");
    },

    handleDataFailure()
    {
        this.dataSuccess  = false;
        this.dataFailure    = true;
        this.dataSubmitting = false;

        console.log('something went wrong...');

        this.emit("change");
    },

    /*==========  handlers  ==========*/
    handleReceiveDataSuccess(data)
    {
        this.dataSuccess  = true;
        this.dataFailure    = false;
        this.dataSubmitting = false;
        this._data          = data;

        this.emit("change");
    },

    isDataSuccess()
    {
        return this.dataSuccess;
    },

    isDataSubmitting()
    {
        return this.dataSubmitting;
    }
});

export default RSVPStore;
