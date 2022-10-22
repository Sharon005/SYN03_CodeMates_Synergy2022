import Axios from 'axios';
import React, { useEffect, useState } from 'react'

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
    
        {eventList.map((val, key) => {
            return (
            <div className="row" key={key}>
                <img src={val.src} width={190} height={250} alt='event'/>
                <h1>{val.eventName}</h1>
                <h1>No. Of Participants: {val.noOfParticipants}</h1>
                <label>UserName:</label>
                <input type="text" 
                onChange={(event) => {
                    setEventName(val.eventName)
                    setParticipantName(event.target.value)
                    }}
                />
                <label>Roll No:</label>
                <input type="text" 
                onChange={(event) => {
                    setParticipantRoll(event.target.value)
                    }}
                />
                <label>Points:</label>
                <input type="number" 
                onChange={(event) => {
                    setparticipantPoints(event.target.value)
                    }}
                />
                <button onClick={insertpoints}>Insert Points</button>
            </div>
            );
        })}
        </div>
  )
}

export default Judge