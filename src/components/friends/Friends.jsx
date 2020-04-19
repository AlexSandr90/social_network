import React from "react";

import Friend from "./friend";

import friends from './friends.module.css';

const Friends = props => {

    const {friendsGroup} = friends;
    const { friendsData } = props.state;

    const FriendItem = friendsData.map(element => (
        <Friend
            key={element.id}
            frendIcon={element.avatar}
            firstName={element.firstName}
            lastName={element.lastName}
        />
    ))

    return (
        <div className={friendsGroup}>
            { FriendItem }
        </div>
    )
};

export default Friends;