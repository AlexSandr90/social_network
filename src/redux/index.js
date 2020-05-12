// import store from "./store";

import store from "./sroreRedux";

import {
    addPostActionCreater,
    updatePostDataActionCreater
} from "./profileReducer";

import {
    addMessageActionCreator,
    updateMessageDataActionType
} from "./dialogsReducer";

import {
    followAC,
    unfollowAC,
    setFriendsAC
} from "./friendsReducer";

export {
    followAC,
    unfollowAC,
    setFriendsAC,
    addPostActionCreater,
    addMessageActionCreator,
    updatePostDataActionCreater,
    updateMessageDataActionType,
}

export default store;