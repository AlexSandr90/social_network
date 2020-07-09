import React from "react";
import Message from "./message";
import DialogItem from "./dialogItem";
import d from './dialogs.module.css';
import {Redirect} from "react-router-dom";
import AddMessagesForm from "./addMessagesForm/AddMessagesForm";

const Dialogs = props => {

    const state = props.dialogsPage;

    const {
        dialogs,
        dialogsItems,
        messagesField,
    } = d;

    const dialogsItem = state.dialogsData.map(element => (
        <DialogItem
            key={element.id}
            id={element.id}
            name={element.name}
            itemImg={element.itemImg}
        />)
    );

    const messagesDataItem = state.messagesData.map(element => (
        <Message
            className={dialogs.messages}
            key={element.id}
            messageText={element.message}
        />)
    );

    const addNewMessage = values => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                { dialogsItem }
            </div>
            <div className={messagesField}>
                { messagesDataItem }
                <AddMessagesForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;
