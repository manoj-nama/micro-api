const express = require('express')
    , router = express.Router()
    , EventService =  require('./events.service');

const fetchEventList = (req, res) => {
    let payload = {};
    EventService.fetchEventList(payload, (error, data) => {
        if (error) {

        } else if (!data) {

        } else {

        }
    });
};

module.exports = function () {
    router.get('/', fetchEventList);
    return router;
}