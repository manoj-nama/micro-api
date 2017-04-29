const config = require('./../config/index')
    , require = require('request');

module.exports = {
    isAuthenticated : (authenticationData, callback) => {
        var options = {
            url: config.authServer.baseUrl + '', //URL to hit
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            json: authenticationData //Set the post data
        };
        request(options, callback);
    }
};