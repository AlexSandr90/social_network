import store from "./sroreRedux";

import {
    addPostAC,
    updatePostDataAC
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
    updatePostDataAC,
    toggleIsFetching,
    setTotalFriendsCount,
    updateMessageDataActionType
}

export default store;