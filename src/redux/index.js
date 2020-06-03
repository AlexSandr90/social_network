import store from "./sroreRedux";

import {
    addPostAC,
    setUserProfile,
    updatePostDataAC,
} from "./profileReducer";

import {
    addMessageAC,
    updateMessageDataActionType
} from "./dialogsReducer";

import {
    follow,
    unfollow,
    setFriends,
    setCurrentPage,
    toggleIsFetching,
    getUsers,
    setTotalFriendsCount,
    toggleFollowingProgress,
} from "./friendsReducer";

import {
    setAuthUserData
} from "./authReducer";

export {
    follow,
    addPostAC,
    unfollow,
    setFriends,
    addMessageAC,
    setCurrentPage,
    setUserProfile,
    setAuthUserData,
    updatePostDataAC,
    toggleIsFetching,
    getUsers,
    setTotalFriendsCount,
    toggleFollowingProgress,
    updateMessageDataActionType,
}

export default store;