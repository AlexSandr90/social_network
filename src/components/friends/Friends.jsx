import React from "react";
import friends from './friends.module.css';

const Friends = props => {

    const {
        info,
        item,
        avatarImg,
        friendsGroup
    } = friends;

    return (
        <div className={friendsGroup}>
            {
                props.friendsData.map(element => {

                    const {
                        id,
                        avatar,
                        status,
                        followed,
                        lastName,
                        firstName,
                    } = element;

                    const {
                        city,
                        country
                    } = element.location;

                    return (
                        <div key={id} className={item}>
                            <img src={avatar} className={avatarImg} alt='Friends avatar'/>
                            <div>
                                {
                                    followed
                                        ? <button onClick={() => props.unfollowFriend(id) } >Unfollow</button>
                                        : <button onClick={() => props.followFriend(id) } >Follow</button>
                                }
                            </div>
                            <p className={info}> {firstName} {lastName} </p>
                            <p className={info}> {status} </p>
                            <p className={info}> {country}, {city} </p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Friends;