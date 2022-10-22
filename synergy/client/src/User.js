import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import UserHeader from './components/UserHeader';
import Card from './Card';
import UserCard from './UserCard';

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
        <UserHeader />
        <h1>Events</h1>

        <UserCard />

      </div>
    )
}

export default User;