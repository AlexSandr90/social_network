import React from "react";
import Dialogs from "./Dialogs";
import {
    addMessageActionCreator,
    updateMessageDataActionType
} from "../../redux";

const DialogsContainer = props => {
debugger
    const state = props.store.getState().dialogsPage;

    const newMessage = () => props.store.dispatch(addMessageActionCreator());

    const onMessageChange = text => props
        .store.dispatch(updateMessageDataActionType(text));

    return (
        <Dialogs
            sendMessage={newMessage}
            dialogsPage={state}
            updateMessageData={onMessageChange}
        />
    )

};

export default DialogsContainer;