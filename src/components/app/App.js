import React from 'react';

import './App.css';
import '../variables/variables.css';

import News from "../news";
import Music from "../music";
import Header from "../header";
import Footer from "../footer";
import Navbar from "../navbar";
import Friends from "../friends";
import Profile from "../profile";
import Dialogs from "../dialogs";
import Settings from "../settings";

import { Route } from "react-router-dom";
import DialogsContainer from "../dialogs/DialogsContainer";

const App = props => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper__content'>
                <Route
                    path='/profile'
                    render={() => <Profile store={props.store} />}
                />
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer store={props.store} />}
                />
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends state={ props.state.friendsPage }/>}/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;