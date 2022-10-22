import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header';
import Card from './Card';
import './List.css'
import { Link } from 'react-router-dom';

function List() {

    const [partList, setPartList] = useState([]);
  
    useEffect(() => {
      Axios.get("http://localhost:3001/viewlist").then((response) => {
        setPartList(response.data);
      })
    }, [])
  return (
    <div className='list-container'>
        <h1>CRCE Transylvania</h1>
        <br/>
        {partList.map((val, key) => {
                    return (
                    <div className='cards'>
                        <div className="checkoutProduct__user list-details" key={key}>
                        <h1 id='space'>Name: <span className='white'>{val.participantName}</span></h1>
                        
                        <h1 id='space'>Roll No: <span className='white'>{val.participantRoll}</span></h1>
                        </div>
                    </div>
                        
                    );
                })}
    </div>
  )
}

export default List