import React from "react";
import Dialogs from "./Dialogs";
import {
    addMessageAC,
    updateMessageDataActionType
} from "../../redux";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: () => dispatch(addMessageAC()),
        updateMessageData: text => dispatch(updateMessageDataActionType(text)),
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;