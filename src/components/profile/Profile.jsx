import React from "react";
import ProfileInfo from "./profileInfo";
import profile from './profile.module.css';
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = props => {
    return (
        <section className={profile.main}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </section>
    )
};

export default Profile;