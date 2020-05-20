// import store from "./store";

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
    followAC,
    unfollowAC,
    setFriendsAC,
    setCurrentPageAC,
    setTotalFriendsCountAC,
} from "./friendsReducer";

export {
    followAC,
    addPostAC,
    unfollowAC,
    setFriendsAC,
    addMessageAC,
    setCurrentPageAC,
    updatePostDataAC,
    setTotalFriendsCountAC,
    updateMessageDataActionType
}

export default store;