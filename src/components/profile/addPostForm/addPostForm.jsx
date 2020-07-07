import React, { Component } from "react";
import profile from '../profile.module.scss';
import {Field, reduxForm} from "redux-form";
import p from "../myPosts/myPosts.module.css";


const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field
                    component='textarea'
                    name='newPostText'
                    placeholder='it-kamasutra.com'
                />
            </p>
            <p>
                <button>Add post</button>
            </p>
        </form>
    )
};
// const AddPostFormRedux = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm);
//
// export default AddPostFormRedux;

export default reduxForm({form: 'profile-add-post'})(AddPostForm);
