import React from 'react';

import './App.css';
import '../variables/variables.css';

import News from "../news";
import Music from "../music";
import Header from "../header";
import Footer from "../footer";
import Navbar from "../navbar";
import ProfileContainer from "../profile";
import Settings from "../settings";
import DialogsContainer from "../dialogs/DialogsContainer";

import {Route} from "react-router-dom";
import FriendsContainer from "../friends";
import HeaderContainer from "../header";

const App = props => {
    return (
        <div className='app-wrapper'>
            {/*<Header/>*/}
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