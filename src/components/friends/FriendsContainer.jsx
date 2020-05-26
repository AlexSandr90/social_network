import React, {Component, Fragment} from "react";
import Friends from "./Friends";
import * as axios from 'axios';
import {connect} from 'react-redux';
import Preloader from "../common/Preloader/Preloader";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(res.data.items);
                this.props.setTotalFriendsCount(res.data.totalCount);
            })
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(res.data.items);
            })
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


// const mapDispatchToProps = dispatch => {
//     return {
//         followFriend: friendId => {
//             dispatch(followAC(friendId));
//         },
//         unfollowFriend: friendId => {
//             dispatch(unfollowAC(friendId));
//         },
//         setFriends: friend => {
//             dispatch(setFriendsAC(friend));
//         },
//         setCurrentPage: pageNumber => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalFriendsCount: totalCount => {
//             dispatch(setTotalFriendsCountAC(totalCount));
//         },
//         toggleIsFetching: isFetching => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// };

// const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsAPIContainer);