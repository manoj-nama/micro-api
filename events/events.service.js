const EventModel = require('./events.model');

module.exports = {
    fetchEventList: (payload, CB) => {
        EventModel
            .find(payload)
            .lean()
            .exec((err, data) => {
                if (err) {
                    CB(err, null);
                } else {
                    CB(null, data);
                }
            });
    }
};