import React from "react";
import profile from '../profile.module.scss';
import {Field, reduxForm} from "redux-form";
import p from "../myPosts/myPosts.module.css";
import {
    required,
    maxLengthCreator,
} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls";


const maxLenght10 = maxLengthCreator(10);

const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name='newPostText'
                validate={[required, maxLenght10]}
            />
            <p>
                <button>Add post</button>
            </p>
        </form>
    )
};

export default reduxForm({form: 'profile-add-post'})(AddPostForm);
