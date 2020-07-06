import React, { Component } from "react";
import profile from '../profile.module.scss';
import {Field, reduxForm} from "redux-form";


const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field
                    component={'textarea'}
                    name={'postText'}
                />
            </p>
            <p>
                <button>Add post</button>
            </p>
        </form>
    )
};

export default reduxForm({form: 'profile-add-post'})(AddPostForm);