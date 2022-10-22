import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Await } from "react-router-dom";
import Admin from './Admin';
import Header from './components/Header';
import User from './User';
import './Login.css';
import styled from "styled-components";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // const [role, setRole] = useState('');

    const [userList, setUserList] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
      if (userName === 'admin' && password === 'admin') {
        navigate("/admin");
      }
      else if(userName === 'judge' && password === 'judge') {
        navigate("/judge");
      }
      else if(userName === 'user' && password === 'user') {
        navigate("/user");
      }
      else {
        navigate("/login");
      }

    }, [userName, password]);

    useEffect(() => {
      Axios.get("http://localhost:3001/readuser").then((response) => {
        setUserList(response.data);
      })
    }, [])
  
    const addUser = () => {
      Axios.post("http://localhost:3001/insertuser", {
        userName: userName, 
        password: password, 
      });
    };

    return (
        <div className='login-container'>
            <Header />
  
            <div className='main-container'>
              <h1>Login</h1>
              <label>Username:</label>
              <div className='input-container'>
                <input type="text" className='login-input'
                onChange={(event) => {
                setUserName(event.target.value)
                }}
                />
              </div>
              
              <label>Password:</label>
              <input type="password" className='login-input'
              onChange={(event) => { 
              setPassword(event.target.value)
              }}
              />
              <button className='login-button' onClick={addUser}>Login</button>
            </div>
            
            {/* <label>Role:</label>

            <input type="radio" id="user" name="role" value="User" />
            <label for="user">User</label>
            <input type="radio" id="admin" name="role" value="Admin" />
            <label for="admin">Admin</label> */}

            
            
            
            {/* <h1>{userName}</h1> */}
      </div>
    );
}

export default Login