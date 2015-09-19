import Fluxxor from "fluxxor";
import C       from "../constants";

let RSVPStore = Fluxxor.createStore({
    init()
    {
        this._data = [];
    },

    initialize()
    {
        this.init();

        this.bindActions(
          C.GSHEETS.SUBMIT_FORM_SUCCESS, this.handleReceiveDataSuccess
        );
    },

    rsvpFormStatus()
    {
        console.log('status goes here');
    },

    /*==========  handlers  ==========*/
    handleReceiveDataSuccess(data)
    {
        this._data = data;
        this.emit("change");
    }
});

export default RSVPStore;
