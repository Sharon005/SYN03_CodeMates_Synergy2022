const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    noOfParticipants: {
        type: Number,
        required: true,
    },
    eventDesc: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;