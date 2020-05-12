import React from "react";

import friend from './friend.module.css';

const Friend = props => {

    const {
        frendIcon,
        firstName,
        lastName,
        status
    } = props;

    const { item, avatar, info } = friend;

    return (
        <div className={item}>
            <img src={frendIcon} className={avatar} alt="Friends avatar"/>
            <p className={info}> {firstName} {lastName} </p>
            <p className={info}>{status}</p>
        </div>
    )
};

export default Friend;