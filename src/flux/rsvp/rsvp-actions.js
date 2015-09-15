import C from "../constants";
import api from "./rsvp-client";

export default {
    fetch(query) {
        if (!query) {
            this.dispatch(C.SERVER.FETCH_DATA_SUCCESS, []);
        return [];
    }

    return api.fetch(query).then(data => {
        this.dispatch(C.SERVER.FETCH_DATA_SUCCESS, data.items);
        return data;
      });
    }
};
