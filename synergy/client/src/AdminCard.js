import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header';
import Card from './Card';
import './UserCard.css'
import { Link } from 'react-router-dom';

function AdminCard() {
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
                            <Link to='/participants' style={{ textDecoration: 'none' }}>
                                <span className="header__optionLineTwo btn">View All Participants</span>
                            </Link>
                            <span>   </span>
                            <Link to='/leaderboard' style={{ textDecoration: 'none' }}>
                                <span className="header__optionLineTwo btn">View All Points</span>
                            </Link>
                        </div>
                        </div>
                    </div>
                        
                    );
                })}
            </div>
    )
}

export default AdminCard
