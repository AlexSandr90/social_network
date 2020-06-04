import React from "react";
import ProfileInfo from "./profileInfo";
import prof from './profile.module.scss';
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = props => {
    return (
        <section className={prof.main}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </section>
    )
};

export default Profile;