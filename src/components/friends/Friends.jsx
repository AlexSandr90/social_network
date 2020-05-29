import React from "react";
import friends from './friends.module.scss';
import stockPhoto from '../../assets/images/stockPhoto.jpg';
import { NavLink } from "react-router-dom";
import * as axios from 'axios';
import {usersAPI} from "../../api";


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
                                        usersAPI.getUnfollow(id)
                                            .then(data => {
                                               if (data.resultCode === 0) {
                                                   return props.unfollow(id)
                                               }
                                            })
                                        }}>
                                            Unfollow
                                    </button>
                                        : <button onClick={() => {
                                            usersAPI.getFollow(id)
                                                .then(data => {
                                                    if (data.resultCode === 0) {
                                                        return props.follow(id)
                                                    }
                                                })
                                        }}>
                                            Follow
                                        </button>
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