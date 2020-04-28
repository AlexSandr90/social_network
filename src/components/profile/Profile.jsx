import React from "react";

import MyPosts from "./myPosts";
import ProfileInfo from "./profileInfo";

import profile from './profile.module.css';
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = props => {

    // const { postData, newPostData } = props.state;
    // debugger
    return (
        <section className={profile.main}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
            {/*<MyPosts*/}
            {/*    postData={ postData }*/}
            {/*    newPostData={ newPostData }*/}

            {/*    dispatch={ props.dispatch }*/}
            {/*/>*/}
        </section>
    )
};

export default Profile;