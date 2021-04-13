import React from "react";
import d from "../dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators";


const maxLenght30 = maxLengthCreator(30);

const AddMessagesForm = props => {

    return (
        <form className={d.messageInputField}
              onSubmit={props.handleSubmit}
        >
            <p>
                <Field component={Textarea}
                       name='newMessageBody'
                       placeholder='Start to type...'
                       className={d.textField }
                       validate={[required, maxLenght30]}
                />
            </p>
            <p>
                <button>Add message</button>
            </p>
        </form>
    )
};

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessagesForm);
