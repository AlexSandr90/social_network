import React from "react";
import Friends from "./Friends";

import { connect } from 'react-redux';
import {
    followAC,
    unfollowAC,
    setFriendsAC,
    setCurrentPageAC,
    setTotalFriendsCountAC,
} from "../../redux";

const mapStateToPropst = state => {
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


const FriendsContainer = connect(mapStateToPropst, mapDispatchToProps)(Friends);

export default FriendsContainer;
