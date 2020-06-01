import React from 'react';
import News from "../news";
import Music from "../music";
import Footer from "../footer";
import Navbar from "../navbar";
import Settings from "../settings";
import HeaderContainer from "../header";
import ProfileContainer from "../profile";
import DialogsContainer from "../dialogs/DialogsContainer";
import FriendsContainer from "../friends";


import './App.css';
import '../variables/variables.css';

import {Route} from "react-router-dom";


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper__content'>
                <Route
                    path='/profile/:userId?'
                    render={() => <ProfileContainer/>}/>
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route
                    path='/friends'
                    render={() => <FriendsContainer/>}/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;