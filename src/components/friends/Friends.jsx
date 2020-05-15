import React from "react";
import friends from './friends.module.css';

const Friends = props => {

    if (props.friendsData.length === 0) {
        props.setFriends([
                {
                    id: 1,
                    followed: true,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaqesW_4YUvdVSr3HyJVwKutuNjNZErzsrspdGMrG94FuYflnf',
                    firstName: 'Dmitry',
                    lastName: 'K.',
                    status: 'I am a teacher',
                    location: {
                        country: 'Republic of Belarus',
                        city: 'Minsk'
                    }
                },
                {
                    id: 2,
                    followed: true,
                    avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
                    firstName: 'Andrey',
                    lastName: 'Gaytsuk',
                    status: 'I am a father',
                    location: {
                        country: 'Ukraine',
                        city: 'Dniprovokamyanka'
                    }
                },
                {
                    id: 3,
                    followed: true,
                    avatar: 'https://pristor.ru/wp-content/uploads/2017/03/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8F%D0%BC%D0%B8-%D1%81%D0%BE-%D1%81%D0%BC%D1%8B%D1%81%D0%BB%D0%BE%D0%BC-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-13-320x320.jpg',
                    firstName: 'Alex',
                    lastName: 'Gaytsuk',
                    status: 'I am the best of the best',
                    location: {
                        country: 'Ukraine',
                        city: 'Dnipro'
                    }
                },
                {
                    id: 4,
                    followed: false,
                    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
                    firstName: 'Solnyshko',
                    lastName: 'Yasnoe',
                    status: 'I am a real person',
                    location: {
                        country: 'Ukraine',
                        city: 'Dnipro'
                    }
                },
                {
                    id: 5,
                    followed: false,
                    avatar: 'https://i.work.ua/sent_photo/d/9/0/d905833989fbdd2146fd591ea84de831.jpg',
                    firstName: 'Roman',
                    lastName: 'Kopylov',
                    status: 'I am a good friend',
                    location: {
                        country: 'Ukraine',
                        city: 'Dnipro'
                    }
                },
            ]
        )
    }


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