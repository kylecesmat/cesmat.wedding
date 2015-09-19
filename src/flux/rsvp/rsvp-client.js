export default {
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
        return response;
        } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
        }
    },

    parseJSON(response) {
        return response.json();
    },

    fetch(form) {
        let host = "https://script.google.com/macros/s/AKfycbzNwLRzFWgoOrVYzR7CUOulOLgXBSiAwMgwv8XK6c_L4LxH93Y/exec";

        let formData = new FormData(form);

        return fetch(host, {
            method : 'post',
            body   : formData
        })
        .then(this.checkStatus)
        .then(this.parseJSON)
        .then((data) => {
            console.log('request succeeded with JSON response', data);
        }).catch(function(error) {
            console.log('request failed', error);
        });
    }
};
