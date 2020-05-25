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

export {
    follow,
    addPostAC,
    unfollow,
    setFriends,
    addMessageAC,
    setCurrentPage,
    setUserProfile,
    updatePostDataAC,
    toggleIsFetching,
    setTotalFriendsCount,
    updateMessageDataActionType,
}

export default store;