const express = require('express')
    , router = express.Router()
    , AuthService =  require('./auth.service')
    , ResponseHandler = require('./../util/ResponseHandler')
    ;

const isAuthenticated = (req, res) => {
    let payload = {
        jwtToken: req.params['jwtToken']
    };
    AuthService.isAuthenticated(payload, (error, response, body) => {
        if (error || !response.isAuthenticated) {
            res.status(400).send(ResponseHandler.formatFailure("AUTH", 1001));
        } else {
            next();
        }
    });
};

module.exports = {
    isAuthenticated
};