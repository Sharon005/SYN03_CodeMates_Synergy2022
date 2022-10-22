import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Card.css'

function Card() {
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
  return (
    <div>
      {eventList.map((val, key) => {
          return (
            <div className="card" key={key}>
              <img src={val.src} alt='event' className='card_img'/>
              <h1 className='card_title'>{val.eventName}</h1>
              <h1 className="card_desc">No. Of Participants: {val.noOfParticipants}</h1>
            </div>
          );
        })}
    </div>
    
  )
}

export default Card