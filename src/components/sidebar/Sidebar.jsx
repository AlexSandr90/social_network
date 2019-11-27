import React, { Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <main className='sidebar'>
                <nav className='sidebar__nav'>
                    <ul className='sidebar__nav-items items'>
                        <li className='items_item'><a href="#">Profile</a></li>
                        <li className='items_item'><a href="#">Messages</a></li>
                        <li className='items_item'><a href="#">News</a></li>
                        <li className='items_item'><a href="#">Music</a></li>
                        <li className='items_item'><a href="#">Settings</a></li>
                    </ul>
                </nav>
            </main>
        )
    }
};
