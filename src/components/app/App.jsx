import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import Sidebar from '../sidebar';
import Content from '../content';

export default class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <Content/>
            </div>
        );
    }
};
