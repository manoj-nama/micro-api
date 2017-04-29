const express = require('express')
    , router = express.Router();
let eventHandler = null;


function setRoutes() {
    router.get('/', eventHandler.fetchEventList);
}

 module.exports = (cfg) => {
     if (typeof cfg === 'undefined') {
         throw new Error('No config object passed to router.');
     } else if (typeof cfg.models === 'undefined') {
         throw new Error('No models passed to router.');
     }
     
     eventHandler = require('./handlers')({models: cfg.models});
     setRoutes();
     return router;
 };