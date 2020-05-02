import React from "react";
import Message from "./message";
import DialogItem from "./dialogItem";
import d from './dialogs.module.css';

const Dialogs = props => {
    debugger
    const state = props.dialogsPage;
console.log(`state: ${state.value}`);
console.log(`props: ${props.value}`);
    const {
        button,
        dialogs,
        messagesField,
        textField,
        dialogsItems,
        messageInputField,
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

    const newMessageText = state.newMessageText;

    const newMessage = () => props.sendMessage();

    const onMessageChange = event => props.updateMessageData(event.target.value);

    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                { dialogsItem }
            </div>
            <div className={messagesField}>
                { messagesDataItem }
                <div className={messageInputField}>
                    <p>
                        <textarea
                            className={ textField }
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