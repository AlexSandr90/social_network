import React from "react";
import Friends from "./Friends";

import { connect } from 'react-redux';
import {
    followAC,
    unfollowAC,
    setFriendsAC
} from "../../redux";

const mapStateToPropst = state => {
    return {
        friendsData: state.friendsPage.friendsData
    }
};

const mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId));
        },
        unfollow: userId => {
            dispatch(unfollowAC(userId));
        },
        setFriends: friend => {
            dispatch(setFriendsAC(friend));
        }
    }
};


const FriendsContainer = connect(mapStateToPropst, mapDispatchToProps)(Friends);

export default FriendsContainer;
