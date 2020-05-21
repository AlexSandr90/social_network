import React, { Component } from "react";
import * as axios from 'axios';
import stockPhoto from '../../assets/images/stockPhoto.jpg';

import friends from './friends.module.css';

class Friends extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setFriends(res.data.items);
                this.props.setTotalFriendsCount(res.data.totalCount);
            })
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setFriends(res.data.items);
            })
    };

    render() {
        
        const {
            info,
            item,
            avatarImg,
            friendsGroup,
            selectedPage,
            countPagePagination
        } = friends;

        const pagesCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize);

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
                                    className={this.props.currentPage === page && selectedPage}
                                    onClick={() => {this.onPageChanged(page);}}
                                >{page}</span>
                            )
                        })
                    }
                </div>
                {
                    this.props.friendsData.map(element => {

                        const {
                            id,
                            avatar,
                            status,
                            followed,
                            lastName,
                            firstName,
                            name
                        } = element;

                        return (
                            <div key={element.id} className={item}>
                                <img src={element.photos.small != null ? element.photos.small : stockPhoto}
                                     className={avatarImg} alt='Friends avatar'/>
                                <div>
                                    {
                                        followed
                                            ? <button onClick={() => this.props.unfollowFriend(id)}>Unfollow</button>
                                            : <button onClick={() => this.props.followFriend(id)}>Follow</button>
                                    }
                                </div>
                                {/*<p className={info}> {firstName} {lastName} </p>*/}
                                <p className={info}> {name} </p>
                                <p className={info}> {status} </p>
                                <p className={info}> {'{country}, {city}'} </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Friends;