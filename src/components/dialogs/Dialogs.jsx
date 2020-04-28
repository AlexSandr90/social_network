import React from "react";

import Message from "./message";
import DialogItem from "./dialogItem";

import d from './dialogs.module.css';

import {
    addMessageActionCreater,
    updateMessageDataActionType,
} from "../../redux";

const Dialogs = props => {

    const {
        button,
        dialogs,
        messagesField,
        textField,
        dialogsItems,
        messageInputField,
    } = d;

    const {
        dialogsData,
        messagesData,
        newMessageText
    } = props.state;

    const { addMessage, updateMessageData } = props;

    const DialogsItem = dialogsData.map(element => (
        <DialogItem
            key={element.id}
            id={element.id}
            name={element.name}
            itemImg={element.itemImg}
        />)
    );

    const MessagesDataItem = messagesData.map(element => (
        <Message
            className={dialogs.messages}
            key={element.id}
            messageText={element.message}
        />)
    );

    const messageField = React.createRef();

    const newMessage = () => props
        .dispatch(addMessageActionCreater());

    const onMessageChange = () => props
        .dispatch(updateMessageDataActionType(messageField.current.value));

    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                { DialogsItem }
            </div>
            <div className={messagesField}>
                { MessagesDataItem }
                <div className={messageInputField}>
                    <p>
                        <textarea
                            className={ textField }
                            ref={ messageField }
                            value={ newMessageText }
                            onChange={ onMessageChange }
                            placeholder='Start to type...'
                        />
                    </p>
                    <p>
                        <button
                            onClick={ newMessage }
                            className={ button }
                        >
                            Add message
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;