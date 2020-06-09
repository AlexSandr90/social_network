import React from "react";
import Dialogs from "./Dialogs";
import {
    addMessageAC,
    updateMessageDataActionType
} from "../../redux";
import {connect} from "react-redux";
import { withAuthRedirect } from "../../hoc";
import {compose} from "redux";

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

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;