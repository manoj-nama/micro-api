const express = require('express')
    , router = express.Router()
    , EventService =  require('./events.service')
    , ResponseHandler =  require('../util/ResponseHandler');

const fetchEventList = (req, res) => {
    let payload = {};
    if(req.params('lng')){
        payload['lng'] = req.params('lng');
    }
    if(req.params('lat')){
        payload['lat'] = req.params('lat');
    }
    if(req.params('date')){
        payload['date'] = req.params('date');
    }
    EventService.fetchEventList(payload, (error, data) => {
        if (error) {
            res.status(400).send(ResponseHandler.formatFailure("CUSTOM", 400));
        } else if (!data) {
            res.status(400).send(ResponseHandler.formatFailure("EVENT", 2001));
        } else {
            res.status(200).send(ResponseHandler.formatSuccess(data));
        }
    });
};

module.exports = function () {
    router.get('/', fetchEventList);
    return router;
};