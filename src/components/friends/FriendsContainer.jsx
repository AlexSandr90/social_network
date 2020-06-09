import React, {Component, Fragment} from "react";
import Friends from "./Friends";
import {connect} from 'react-redux';
import Preloader from "../common/Preloader/Preloader";

import {
    follow,
    unfollow,
    getUsers,
    setFriends,
    setCurrentPage,
    toggleIsFetching,
    setTotalFriendsCount,
    toggleFollowingProgress,
} from "../../redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc";


class FriendsAPIContainer extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = pageNumber => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <Fragment>
                {
                    this.props.isFetching === true && <Preloader/>
                }
                <Friends totalFriendsCount={this.props.totalFriendsCount}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         pageSize={this.props.pageSize}
                         friendsData={this.props.friendsData}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         followingInProgress={this.props.followingInProgress}
                         toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
            </Fragment>
        )
    }
};


const mapStateToProps = state => {
    return {
        pageSize: state.friendsPage.pageSize,
        isFetching: state.friendsPage.isFetching,
        currentPage: state.friendsPage.currentPage,
        friendsData: state.friendsPage.friendsData,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        followingInProgress: state.friendsPage.followingInProgress
    }
};

// const FriendsContainer = connect(
//     mapStateToProps,
//     {
//         follow,
//         unfollow,
//         getUsers,
//         setFriends,
//         setCurrentPage,
//         toggleIsFetching,
//         setTotalFriendsCount,
//         toggleFollowingProgress,
//     }) 
// (FriendsAPIContainer);

const FriendsContainer = compose(
    withAuthRedirect,
    connect(
        mapStateToProps,
        {
            follow,
            unfollow,
            getUsers,
            setFriends,
            setCurrentPage,
            toggleIsFetching,
            setTotalFriendsCount,
            toggleFollowingProgress,
        })
)(FriendsAPIContainer);

export default FriendsContainer;
