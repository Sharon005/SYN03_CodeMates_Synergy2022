import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import AdminCard from './AdminCard';
import './Admin.css'
import AdminHeader from './components/AdminHeader';

function Admin() {
    const [eventName, setEventName] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [participants, setParticipants] = useState(0);
    const [src, setSrc] = useState('');
  
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
        eventDesc: eventDesc,
        src: src,
      });
      alert("Inserted data!");
    };
  
    return (
      <div className="App">
        <AdminHeader />
        <div className='main_container'>
            <h1>Add New Event</h1>
            <br />
            <div className='input-container'>
              <label className='desc'>Event Name:</label>
              <input type="text" className='event-input'
              onChange={(event) => {
                setEventName(event.target.value)
                }}
              />
              <label className='desc'>No. Of Participants:</label>
              <input type="number" className='event-input' 
              onChange={(event) => { 
                setParticipants(event.target.value)
                }}
              />
              <label className='desc'>Event Description:</label>
              <input type="text" className='event-input'
              onChange={(event) => {
                setEventDesc(event.target.value)
                }}
              />
              <label className='desc'>Image:</label>
              <input type="text" className='event-input'
              onChange={(event) => {
                setSrc(event.target.value)
                }}
              />
              <br />
              <button className='btn' onClick={addToList}>Add To List</button>
            </div>
        </div>
        <br />
        <hr />

        {/* <h1>Admin</h1>
        <h1>Event Management App</h1>
  
        <label>Event Name:</label>
        <input type="text" 
        onChange={(event) => {
          setEventName(event.target.value)
          }}
        />
        <label>Description:</label>
        <input type="text" 
        onChange={(event) => {
          setEventDesc(event.target.value)
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
  
        <h1>Event List</h1>
  
        <AdminCard />
      </div>
    );
  }

export default Admin