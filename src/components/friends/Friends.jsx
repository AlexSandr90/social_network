import React from "react";
// import Friend from "./friend";
import friends from './friends.module.css';

const Friends = props => {

    const {
        info,
        item,
        avatarImg,
        friendsGroup
    } = friends;


    // const FriendItem = props.friendsData.map(element => (
    //     <Friend
    //         key={element.id}
    //         frendIcon={element.avatar}
    //         firstName={element.firstName}
    //         lastName={element.lastName}
    //     />
    // ));

    return (
        <div className={friendsGroup}>
            {
                props.friendsData.map(element => {

                    const {
                        id,
                        avatar,
                        status,
                        lastName,
                        firstName,
                    } = element;

                    const {
                        city,
                        country
                    } = element.location;

                    return (
                        <div key={id} className={item}>
                            <img src={avatar} alt="Friends avatar" className={avatarImg}/>
                            {
                                element.followed
                                    ? <button onClick={() => {props.unfollow(element.id)} } >Unfollow</button>
                                    : <button onClick={() => {props.follow(element.id)} } >Follow</button>
                            }
                            {/*<button>Follow</button>*/}
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