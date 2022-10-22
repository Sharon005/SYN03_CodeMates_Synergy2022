const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
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
    participantYear: {
        type: String,
        required: true,
    },
    participantBranch: {
        type: String,
        required: true,
    },
});

const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;