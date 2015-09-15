import Fluxxor from "fluxxor";
import C       from "../constants";

let RSVPStore = Fluxxor.createStore({
    init() {
        this._data = [];
    },

    initialize() {
        this.init();

        this.bindActions(
          C.SERVER.FETCH_DATA_SUCCESS, this.handleReceiveDataSuccess
        );
    },

    /*==========  Getters  ==========*/
    getRepos() {
        return JSON.parse(JSON.stringify(this._data));
    },

    /*==========  handlers  ==========*/
    handleReceiveDataSuccess(data) {
        this._data = data;
        this.emit("change");
    }
});

export default RSVPStore;
