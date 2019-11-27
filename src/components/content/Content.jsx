import React, { Component } from 'react';
import './content.css';

export default class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div className="profile-head-pic"/>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        )
    }
}
