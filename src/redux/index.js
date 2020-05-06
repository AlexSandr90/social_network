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

export {
    addPostActionCreater,
    addMessageActionCreator,
    updatePostDataActionCreater,
    updateMessageDataActionType,
}

export default store;