import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  
import Burger from './pages/header_burger';
import Login from './login';
import Main from './pages/main';
import Calendar from './pages/calendar';


function App(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                
            </Routes>
        </Router>
    )
};

export default App;