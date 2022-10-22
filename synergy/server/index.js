const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const EventModel = require('./models/Event');
const UserModel = require('./models/User');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://user:sahil123@crud.efk5dgt.mongodb.net/eventManagement?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post('/insert', async(req, res) => {
    const eventName = req.body.eventName
    const participants = req.body.participants
    const src = req.body.src

    const event = new EventModel({eventName: eventName, noOfParticipants: participants, src: src});

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

app.get('/read', async(req, res) => {
    EventModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    })
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});