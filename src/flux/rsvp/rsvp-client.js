export default {
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    },

    parseJSON(response) {
        return response.json();
    },

    fetch(form) {
        let host = "https://script.google.com/macros/s/AKfycbzNwLRzFWgoOrVYzR7CUOulOLgXBSiAwMgwv8XK6c_L4LxH93Y/exec";

        return fetch(host, {
            method : 'post',
            body   : new FormData(form)
        })
        .then(this.checkStatus)
        .then(this.parseJSON)
        .then((data) => {
            console.log('request succeeded with JSON response', data);
        }).catch((error) => {
            console.log('request failed', error);
        });
    }
};
