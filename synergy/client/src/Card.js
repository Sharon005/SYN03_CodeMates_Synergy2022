import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Card.css'

function Card() {
    const [eventName, setEventName] = useState('');
    const [eventDesc, setEventDesc] = useState('');
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
            <div className='cards'>
                <div className="checkoutProduct" key={key}>
                  <img src={val.src} alt='event' className='checkoutProduct__image'/>
                  <div className="checkoutProduct__info">
                    <h1 className='checkoutProduct__title'>{val.eventName}</h1>
                    <h4 className="checkoutProduct__price"><span className='desc'>Description: </span>{val.eventDesc}</h4>
                    <br />
                    <h4 className="checkoutProduct__price"><span className='desc'>No. Of Participants: </span>{val.noOfParticipants}</h4> 
                  </div>
                </div>
            </div>
            
          );
        })}

    </div>
    
  )
}

export default Card