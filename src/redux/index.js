import store from "./sroreRedux";

import {
    addPostAC,
    setStatus,
    getStatus,
    updateStatus,
    getUserProfile,
    setUserProfile,
} from "./profileReducer";

import {
    addMessageAC,
} from "./dialogsReducer";

import {
    follow,
    unfollow,
    getUsers,
    setFriends,
    setCurrentPage,
    toggleIsFetching,
    setTotalFriendsCount,
    toggleFollowingProgress,
} from "./friendsReducer";

import {
    getAuthUserData
} from "./authReducer";

export {
    follow,
    unfollow,
    getUsers,
    getStatus,
    setStatus,
    addPostAC,
    setFriends,
    updateStatus,
    addMessageAC,
    setUserProfile,
    setCurrentPage,
    getUserProfile,
    getAuthUserData,
    toggleIsFetching,
    setTotalFriendsCount,
    toggleFollowingProgress,
}

export default store;
