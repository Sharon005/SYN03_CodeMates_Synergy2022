import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Login from './Login';
import Slider from './components/Slider'
import Header from './components/Header';
import Card from './Card';
import './Home.css'

function Home() {
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
  
    const addToList = () => {
      Axios.post("http://localhost:3001/insert", {
        eventName: eventName, 
        participants: participants, 
        src: src,
      });
    };
  
    return (
      <div className="App">
        
        <Header />
        <Slider />
        {/* <h1>Event Management App{}</h1>
  
        <label>Event Name:</label>
        <input type="text" 
        onChange={(event) => {
          setEventName(event.target.value)
          }}
        />
        <label>No. Of Participants:</label>
        <input type="number" 
        onChange={(event) => { 
          setParticipants(event.target.value)
          }}
        />
        <label>Image:</label>
        <input type="text" 
        onChange={(event) => {
          setSrc(event.target.value)
          }}
        />
  
        <button onClick={addToList}>Add To List</button> */}
  
        <h1>Events</h1>

        <Card />

        {/* {eventList.map((val, key) => {
          return (
            <div className="card" key={key}>
              <img src={val.src} alt='event' className='card_img'/>
              <h1 className='card_title'>{val.eventName}</h1>
              <h1 className="card_desc">No. Of Participants: {val.noOfParticipants}</h1>
            </div>
          );
        })} */}

        {/* <Login /> */}
      </div>
    );
  }

export default Home