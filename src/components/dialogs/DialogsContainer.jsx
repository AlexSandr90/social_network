import React from "react";
import Dialogs from "./Dialogs";
import {
    addMessageAC,
    updateMessageDataActionType
} from "../../redux";
import {connect} from "react-redux";
import { withAuthRedirect } from "../../hoc";

const mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: () => dispatch(addMessageAC()),
        updateMessageData: text => dispatch(updateMessageDataActionType(text)),
    }
};

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;