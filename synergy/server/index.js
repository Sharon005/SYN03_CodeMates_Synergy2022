const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const EventModel = require('./models/Event');
const UserModel = require('./models/User');
const Participant = require('./models/Participant');
const Points = require('./models/Judge')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://user:sahil123@crud.efk5dgt.mongodb.net/eventManagement?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post('/insert', async(req, res) => {
    const eventName = req.body.eventName
    const participants = req.body.participants
    const eventDesc = req.body.eventDesc
    const src = req.body.src

    const event = new EventModel({eventName: eventName, noOfParticipants: participants, src: src, eventDesc: eventDesc});

    try {
        await event.save();
        res.send("Inserted data!");
        
    } catch(err) {
        console.log(err);
    }
});

app.post('/insertuser', async(req, res) => {
    const userName = req.body.userName
    const password = req.body.password

    const users = new UserModel({userName: userName, password: password,});

    try {
        await users.save();
        res.send("Inserted user data!");
    } catch(err) {
        console.log(err);
    }
});

app.post('/register', async(req, res) => {
    const eventName = req.body.eventName
    const participantName = req.body.participantName
    const participantRoll = req.body.participantRoll
    const participantYear = req.body.participantYear
    const participantBranch = req.body.participantBranch
    
    const participants = new Participant({eventName: eventName, participantName: participantName, participantRoll: participantRoll, 
        participantYear: participantYear, participantBranch: participantBranch});

    try {
        await participants.save();
        res.send("Inserted participant data!");
    } catch(err) {
        console.log(err);
    }
});

app.post('/insertpoints', async(req, res) => {
    const eventName = req.body.eventName
    const participantName = req.body.participantName
    const participantRoll = req.body.participantRoll
    const participantPoints = req.body.participantPoints

    const points = new Points({eventName: eventName, participantName: participantName, 
        participantRoll: participantRoll, participantPoints: participantPoints});

    try {
        await points.save();
        res.send("Inserted participant points!");
    } catch(err) {
        console.log(err);
    }
});

app.get('/read', async(req, res) => {
    EventModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    })
});

app.get('/readuser', async(req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    })
});

app.get('/viewlist', async(req, res) => {
    Participant.find({eventName: "CRCE Transylvania"}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    })
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});