import React from "react";
import Dialogs from "./Dialogs";
import {
    addMessageAC,
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
        sendMessage: newMessageBody => dispatch(addMessageAC(newMessageBody)),
    }
};

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;
