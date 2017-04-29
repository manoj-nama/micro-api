const EventModel = require('./events.model');

module.exports = {
    fetchEventList: (payload, CB) => {
        EventModel
            .find(payload.query)
            .sort({createdAt: -1})
            .lean()
            .skip(payload.skip || 0)
            .limit(payload.limit || 10)
            .exec((err, data) => {
                if (err) {
                    CB(err, null);
                } else {
                    CB(null, data);
                }
            });
    }
};