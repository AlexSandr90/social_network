import React, { Component } from 'react';

import {
    ContentMain,
    ProfileHeadPic
} from "./styledComponents";

export default class Content extends Component {
    render() {
        return (
            <ContentMain>
                <ProfileHeadPic/>
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
            </ContentMain>
        );
    }
};
