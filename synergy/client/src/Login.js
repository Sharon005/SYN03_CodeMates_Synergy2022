import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from './Admin';
import User from './User';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // const [role, setRole] = useState('');
  
    const addUser = () => {
      Axios.post("http://localhost:3001/insertuser", {
        userName: userName, 
        password: password, 
      });
    };

    return (
        <div>
            <h1>Login</h1>
    
            <label>UserName:</label>
            <input type="text" 
            onChange={(event) => {
            setUserName(event.target.value)
            }}
            />
            <label>Password:</label>
            <input type="password" 
            onChange={(event) => { 
            setPassword(event.target.value)
            }}
            />
            {/* <label>Role:</label>

            <input type="radio" id="user" name="role" value="User" />
            <label for="user">User</label>
            <input type="radio" id="admin" name="role" value="Admin" />
            <label for="admin">Admin</label> */}
    
            <button onClick={addUser}>Login</button>
      </div>
    );
}

export default Login