const configObj = require('./../config/index')
    , request = require('request');

module.exports = {
    isAuthenticated : (authenticationData, callback) => {
        var options = {
            url: configObj.config.authServer.baseUrl + '/auth', 
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