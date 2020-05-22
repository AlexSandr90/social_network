import React, { Component } from "react";
import Friends from "./Friends";
import * as axios from 'axios';
import { connect } from 'react-redux';
import {
    followAC,
    unfollowAC,
    setFriendsAC,
    setCurrentPageAC,
    setTotalFriendsCountAC,
} from "../../redux";


class FriendsAPIContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
        return(
            <Friends totalFriendsCount={this.props.totalFriendsCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     friendsData={this.props.friendsData}
                     followFriend={this.props.followFriend}
                     unfollowFriend={this.props.unfollowFriend}
            />
        )
    }
};


const mapStateToProps = state => {
    return {
        friendsData: state.friendsPage.friendsData,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        followFriend: friendId => {
            dispatch(followAC(friendId));
        },
        unfollowFriend: friendId => {
            dispatch(unfollowAC(friendId));
        },
        setFriends: friend => {
            dispatch(setFriendsAC(friend));
        },
        setCurrentPage: pageNumber => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalFriendsCount: totalCount => {
            dispatch(setTotalFriendsCountAC(totalCount));
        }
    }
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsAPIContainer);

export default FriendsContainer;