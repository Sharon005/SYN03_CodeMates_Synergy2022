import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import JudgeCard from './JudgeCard';

function Judge() {
    const [eventName, setEventName] = useState('');
    const [participants, setParticipants] = useState(0);
    const [src, setSrc] = useState('');

    const [participantName, setParticipantName] = useState('');
    const [participantRoll, setParticipantRoll] = useState('');
    const [participantPoints, setparticipantPoints] = useState(0);
  
    const [eventList, setEventList] = useState([]);
  
    useEffect(() => {
      Axios.get("http://localhost:3001/read").then((response) => {
        setEventList(response.data);
      })
    }, [])
  
    const insertpoints = () => {
      Axios.post("http://localhost:3001/insertpoints", {
        eventName: eventName, 
        participantName: participantName,
        participantRoll: participantRoll,
        participantPoints: participantPoints,
      });
    };
    return (
        <div>
        <h1>Event List</h1>

        <JudgeCard />
    
        </div>
  )
}

export default Judge