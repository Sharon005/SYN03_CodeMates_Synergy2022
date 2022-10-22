import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function User() {
    const [eventName, setEventName] = useState('');
    const [participants, setParticipants] = useState(0);
    const [src, setSrc] = useState('');

    const [participantName, setParticipantName] = useState('');
    const [participantRoll, setParticipantRoll] = useState('');
  
    const [eventList, setEventList] = useState([]);
  
    useEffect(() => {
      Axios.get("http://localhost:3001/read").then((response) => {
        setEventList(response.data);
      })
    }, [])
  
    const register = () => {
      Axios.post("http://localhost:3001/register", {
        eventName: eventName, 
        participantName: participantName,
        participantRoll: participantRoll,
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
            <button onClick={register}>Register</button>
          </div>
        );
      })}
    </div>
  )
}

export default User;