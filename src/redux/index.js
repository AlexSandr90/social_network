import store from "./store";

import {
    addPostActionCreater,
    updatePostDataActionCreater
} from "./profileReducer";

import {
    addMessageActionCreater,
    updateMessageDataActionType
} from "./dialogsReducer";

export {
    addPostActionCreater,
    addMessageActionCreater,
    updatePostDataActionCreater,
    updateMessageDataActionType,
}

export default store;