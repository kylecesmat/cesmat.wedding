import C       from "../constants";
import gsheets from "./rsvp-client";

export default {
    fetch(query) {
        if (!query) {
            this.dispatch(C.GSHEETS.SUBMIT_FORM_FAILURE, []);
        return [];
    }

    return gsheets.fetch(query).then(() => {
        this.dispatch(C.GSHEETS.SUBMIT_FORM_SUCCESS);
      });
    }
};
