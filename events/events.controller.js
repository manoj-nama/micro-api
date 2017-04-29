const express = require('express')
    , router = express.Router()
    , EventService =  require('./events.service')
    , ResponseHandler =  require('../util/ResponseHandler');

const fetchEventList = (req, res) => {
    let payload = {
        query: {}
    };
    if(req.params['lng']){
        payload.query['lng'] = req.params['lng'];
    }
    if(req.params['lat']){
        payload.query['lat'] = req.params['lat'];
    }
    if(req.params['date']){
        payload.query['date'] = req.params['date'];
    }
    if(req.params['limit']) {
        const val = parseInt(req.params['limit'], 10);
        payload.limit = val > 20 ? 20 : val;
    }
    if(req.params['skip']) {
        const val = parseInt(req.params['skip'], 10);
        payload.skip = val;
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