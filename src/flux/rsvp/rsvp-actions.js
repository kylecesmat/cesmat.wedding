import C      from "../constants";
import google from "./rsvp-client";

export default {
    fetch(query) {
        if (!query) {
            this.dispatch(C.SERVER.FETCH_DATA_FAILURE, []);
        return [];
    }

    return google.fetch(query).then(data => {
        this.dispatch(C.SERVER.FETCH_DATA_SUCCESS, data.items);
        return data;
      });
    }
};
