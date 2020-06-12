import React from "react";
import prof from './profile.module.scss';
import ProfileInfo from "./profileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = props => {
    return (
        <section className={prof.main}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </section>
    )
};

export default Profile;