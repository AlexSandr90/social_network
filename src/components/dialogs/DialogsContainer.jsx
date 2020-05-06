import React from "react";
import Dialogs from "./Dialogs";
import {
    addMessageActionCreator,
    updateMessageDataActionType
} from "../../redux";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: () => dispatch(addMessageActionCreator()),
        updateMessageData: text => dispatch(updateMessageDataActionType(text)),
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;