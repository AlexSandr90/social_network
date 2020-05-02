import store from "./store";

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