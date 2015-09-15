import Fluxxor from "fluxxor";
import C       from "../constants";

let RSVPStore = Fluxxor.createStore({
    init()
    {
        this._data = [];
    },

    initalize()
    {
        this.init();

        this.bindActions(
            C.FETCH_DATA_SUCCESS, this.handleRecieveDataSuccess
        );
    },

    // Getter
    getData()
    {
        return JSON.parse(JSON.stringify(this._data));
    },

    // Handler
    handleRecieveDataSuccess(data)
    {
        this._data = data;
        this.emit("change");
    }
});

export default RSVPStore;
