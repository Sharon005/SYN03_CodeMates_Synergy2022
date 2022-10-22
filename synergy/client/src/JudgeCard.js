import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header';
import Card from './Card';
import './UserCard.css'

function JudgeCard() {
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
                {eventList.map((val, key) => {
                        return (
                        <div className='cards'>
                            <div className="checkoutProduct__user" key={key}>
                            
                            <img src={val.src} width={190} height={250} alt='event' className='checkoutProduct__image__user'/>
                            <div className="checkoutProduct__info ">
                                <h1 className='checkoutProduct__title'>{val.eventName}</h1>
                                <h4 className="checkoutProduct__price"><span className='desc'>Description: </span>{val.eventDesc}</h4>
                                <br />
                                <h4 className="checkoutProduct__price"><span className='desc'>No. Of Participants: </span>{val.noOfParticipants}</h4>
                                <br />
                                <label className='desc'>UserName:</label>
                                <input type="text" 
                                onChange={(event) => {
                                    setEventName(val.eventName)
                                    setParticipantName(event.target.value)
                                    }}
                                />
                                <label className='desc'>Roll No:</label>
                                <input type="text" 
                                onChange={(event) => {
                                    setParticipantRoll(event.target.value)
                                    }}
                                />
                                <label className='desc'>Points:</label>
                                <input type="number" 
                                onChange={(event) => {
                                    setparticipantPoints(event.target.value)
                                    }}
                                />
                                <button className='btn' onClick={insertpoints}>Insert Points</button>
                            </div>
                            </div>
                        </div>
                            
                        );
                    })}
        </div>
    )
}

export default JudgeCard

