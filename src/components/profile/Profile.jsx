import React from "react";

import MyPosts from "./myPosts";
import ProfileInfo from "./profileInfo";

import profile from './profile.module.css';

const Profile = props => {

    const { postData, newPostData } = props.state;

    return (
        <section className={profile.main}>
            <ProfileInfo/>
            <MyPosts
                postData={ postData }
                newPostData={ newPostData }

                dispatch={ props.dispatch }
            />
        </section>
    )
};

export default Profile;