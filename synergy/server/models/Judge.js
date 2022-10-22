const mongoose = require('mongoose');

const pointSchem = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    participantName: {
        type: String,
        required: true,
    },
    participantRoll: {
        type: String,
        required: true,
    },
    participantPoints: {
        type: Number,
        required: true,
    },
});

const Point = mongoose.model("Point", pointSchem);
module.exports = Point;