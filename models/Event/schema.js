
 const eventSchema = require('mongoose').Schema;
 
  module.exports = new eventSchema({
      name: { type: String, required: true},
      location: {
          lat: {type: Number},
          lng: {type: Number}
      },
      city: { type: String, required: true},
      organisedBy: { type: String, required: true},
      openEvent: {type: Number},
      source: {type: String},
      date: {type: Date},
      charges: {type: String}
  });
      
      