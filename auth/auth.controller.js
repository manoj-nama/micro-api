const express = require('express')
    , router = express.Router()
    , AuthService =  require('./auth.service')
    , ResponseHandler = require('./../util/ResponseHandler')
    ;

const isAuthenticated = (req, res) => {
    let token = req.Headers["Authorization"];
    token = token.split(' ')[1];
    let payload = {
        jwtToken: token
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