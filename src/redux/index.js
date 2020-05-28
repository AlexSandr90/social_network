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
    setTotalFriendsCount
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
    setTotalFriendsCount,
    updateMessageDataActionType,
}

export default store;