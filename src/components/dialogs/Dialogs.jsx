import React from "react";

import d from './dialogs.module.css';

import DialogItem from "./dialogItem";
import Message from "./message";

const Dialogs = props => {

    const {
        button,
        dialogs,
        messagesField,
        textField,
        dialogsItems,
        messageInputField,
    } = d;
// debugger;
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

    const newMessage = () => {
        props.dispatch({
            type: 'ADD-MESSAGE'
        })
    };

    const onMessageChange = () => {
        props.dispatch({
            type: 'UPDATE-MESSAGE-DATA',
            message: messageField.current.value
        })
    };

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