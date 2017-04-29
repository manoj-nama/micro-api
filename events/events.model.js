const mongoose = require('mongoose');
const eventSchema = require('mongoose').Schema;

const schema = new eventSchema({
    eventName: { type: String, required: true },
    createdAt: {type: Number, default: Date.now},
    location: {
        lat: { type: Number },
        lng: { type: Number }
    },
    city: { type: String, required: true },
    organisedBy: { type: String, required: true },
    openEvent: { type: Boolean },
    source: { type: String },
    date: { type: Number },
    charges: { type: String },
    description: {type: String},
    phone: {type: String},
    venue: {type: String}
});

schema.index({createdAt: 1});

const eventModel = mongoose.model("Event", schema);
module.exports = eventModel;

