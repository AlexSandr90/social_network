import React, {Component, Fragment} from "react";
import Friends from "./Friends";
import * as axios from 'axios';
import {connect} from 'react-redux';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api";

import {
    follow,
    unfollow,
    setFriends,
    setCurrentPage,
    toggleIsFetching,
    setTotalFriendsCount
} from "../../redux";


class FriendsAPIContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(data.items);
                this.props.setTotalFriendsCount(data.totalCount)
            });
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(data.items);
            });
    };

    render() {
        return (
            <Fragment>
                {
                    this.props.isFetching === true && <Preloader/>
                }
                <Friends totalFriendsCount={this.props.totalFriendsCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         friendsData={this.props.friendsData}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                />
            </Fragment>
        )
    }
};


const mapStateToProps = state => {
    return {
        friendsData: state.friendsPage.friendsData,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
    }
};

const FriendsContainer = connect(
    mapStateToProps,
    { follow, unfollow, setFriends, setCurrentPage, setTotalFriendsCount, toggleIsFetching })
(FriendsAPIContainer);

export default FriendsContainer;
