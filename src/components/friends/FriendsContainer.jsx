import React from "react";
import Friends from "./Friends";

import { connect } from 'react-redux';

const mapStateToPropst = state => {
    return {
        friendsData: state.friendsPage.friendsData
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};


const FriendsContainer = connect(mapStateToPropst, mapDispatchToProps)(Friends);

export default FriendsContainer;
