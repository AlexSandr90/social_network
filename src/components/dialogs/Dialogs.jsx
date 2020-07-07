import React from "react";
import Message from "./message";
import DialogItem from "./dialogItem";
import d from './dialogs.module.css';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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

    const newMessageText = state.newMessageText;

    const newMessage = () => props.sendMessage();

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
                <AddMesageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const AddMessageForm = props => {

    return (
        <form className={d.messageInputField}
              onSubmit={props.handleSubmit}
        >
            <p>
                <Field component='textarea'
                       name='newMessageBody'
                       placeholder='Start to type...'
                       className={d.textField }
                />
            </p>
            <p>
                <button>Add message</button>
            </p>
        </form>
    )
}


const AddMesageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
