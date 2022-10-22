import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header';
import Card from './Card';
import './UserCard.css'

function UserCard() {
    const [eventName, setEventName] = useState('');
    const [participants, setParticipants] = useState(0);
    const [src, setSrc] = useState('');

    const [participantName, setParticipantName] = useState('');
    const [participantRoll, setParticipantRoll] = useState('');
    const [participantYear, setParticipantYear] = useState('');
    const [participantBranch, setParticipantBranch] = useState('');
    
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
        participantYear: participantYear,
        participantBranch: participantBranch,
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
                            <label className='checkoutProduct__price desc'>Username: </label>
                            <input type="text" className="checkoutProduct__price"
                            onChange={(event) => {
                            setEventName(val.eventName)
                            setParticipantName(event.target.value)
                            }}
                            />
                            <label className='checkoutProduct__price desc'>Roll No: </label>
                            <input type="text" className="checkoutProduct__price"
                            onChange={(event) => {
                            setParticipantRoll(event.target.value)
                            }}
                            />
                            <label className='checkoutProduct__price desc'>Choose a year: </label>
                            <input type="text" className="checkoutProduct__price"
                            onChange={(event) => {
                              setParticipantYear(event.target.value)
                            }}
                            />
                          

                            <label className='checkoutProduct__price desc'>Choose a branch: </label>
                            <input type="text" className="checkoutProduct__price"
                            onChange={(event) => {
                              setParticipantBranch(event.target.value)
                            }}
                            />
                            
                          <br />
                          
                        <button className='btn checkoutProduct__price' onClick={register}>Register</button>
                    </div>
                    </div>
                  </div>
                    
                );
             })}
        </div>
    )
}

export default UserCard