import React from "react";
import { Route, Routes } from "react-router-dom";

import Dialogs from "./Dialogs/Dialogs";
import Information from "./Information/Information";
import Music from "./Music/Music";
import News from "./News/News";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Users from "./Users/Users";
import Login from './Login/Login';

import './Content.css';


const Content = () => {

  return (
    <div className="main__content content">
      <Routes> 
        <Route path = '' element = { <Information /> } />
        <Route path = '/profile/:userId' element = { <Profile /> } />
        <Route path = '/dialogs/*' element = { <Dialogs /> } />
        <Route path = '/music' element = { <Music /> } />
        <Route path = '/news' element = { <News /> } />
        <Route path = '/users' element = { <Users /> } />
        <Route path = '/settings' element = { <Settings /> } />
        <Route path = '/login' element = { <Login /> } />
      </Routes>
    </div>
  )
}

export default Content;