var express = require('express')
    , router = express.Router()
    , eventHandler = null;

function setRoutes() {
    //router.get('/', eventHandler.eventList);
}

 module.exports = function (cfg) {
     if (typeof cfg === 'undefined') {
         throw new Error('No config object passed to router.');
     }
     
     eventHandler = require('./handlers/eventHandler')({models: cfg.models})
     setRoutes();
     return router;
 }