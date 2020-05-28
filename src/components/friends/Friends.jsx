import React from "react";
import friends from './friends.module.scss';
import stockPhoto from '../../assets/images/stockPhoto.jpg';
import { NavLink } from "react-router-dom";
import * as axios from 'axios';


const Friends = props => {

    const {
        info,
        item,
        avatarImg,
        friendsGroup,
        selectedPage,
        countPagePagination
    } = friends;

    const pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={friendsGroup}>
            <div className={countPagePagination}>
                {
                    pages.map(page => {
                        return (
                            <span
                                key={page}
                                className={props.currentPage === page && selectedPage}
                                onClick={() => {
                                    props.onPageChanged(page);
                                }}
                            >
                                {page}
                            </span>
                        )
                    })
                }
            </div>
            {
                props.friendsData.map(element => {

                    const {
                        id,
                        name,
                        status,
                        followed,
                    } = element;

                    return (
                        <div key={id} className={item}>
                            <NavLink to={`/profile/${id}`}>
                                <img src={element.photos.small != null ? element.photos.small : stockPhoto}
                                     className={avatarImg} alt={name}/>
                            </NavLink>
                            <div>
                                {
                                    followed
                                        ? <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY" : "f764e591-9a1f-433c-8b12-0d58c3ad9e13"
                                                }
                                            })
                                                .then(res => {
                                                    if (res.data.resultCode === 0) {
                                                        props.unfollow(id)
                                                    }
                                                })
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY" : "f764e591-9a1f-433c-8b12-0d58c3ad9e13"
                                                }
                                            })
                                                .then(res => {
                                                    if (res.data.resultCode === 0) {
                                                        props.follow(id)
                                                    }
                                                })
                                        }}>Follow</button>
                                }
                            </div>
                            <p className={info}> {name} </p>
                            <p className={info}> {status} </p>
                            <p className={info}> {'{country}, {city}'} </p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Friends;