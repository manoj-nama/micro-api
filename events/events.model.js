const mongoose = require('mongoose');
const eventSchema = require('mongoose').Schema;

const schema = new eventSchema({
    eventName: { type: String},
    createdAt: {type: Date, default: Date.now},
    location: {
        lat: { type: Number },
        lng: { type: Number }
    },
    city: { type: String },
    organisedBy: { type: String},
    openEvent: { type: Boolean },
    source: { type: String },
    date: { type: Date },
    charges: { type: String },
    description: {type: String},
    phone: {type: String},
    venue: {type: String}
});

schema.index({createdAt: 1});

const eventModel = mongoose.model("Event", schema);
module.exports = eventModel;

