import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link } from 'react-router-dom';
import Admin from './Admin';
import App from './App';
import User from './User';

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
