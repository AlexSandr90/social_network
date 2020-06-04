import store from "./sroreRedux";

import {
    addPostAC,
    getUserProfile,
    updatePostDataAC,
} from "./profileReducer";

import {
    addMessageAC,
    updateMessageDataActionType
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
    addPostAC,
    unfollow,
    setFriends,
    addMessageAC,
    setCurrentPage,
    getUserProfile,
    getAuthUserData,
    updatePostDataAC,
    toggleIsFetching,
    getUsers,
    setTotalFriendsCount,
    toggleFollowingProgress,
    updateMessageDataActionType,
}

export default store;