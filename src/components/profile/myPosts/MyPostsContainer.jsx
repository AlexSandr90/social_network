import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreater,
    updatePostDataActionCreater
} from "../../../redux";


const MyPostsContainer = props => {

    const state = props.store.getState();

    const addPost = () => props
        .store.dispatch(addPostActionCreater());

    const onPostChange = text => {
        let action = updatePostDataActionCreater(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            addPost={addPost}
            postData={state.profilePage.postData}
            newPostData={state.profilePage.newPostData}
            updateNewPostData={onPostChange}
        />
    )
};

export default MyPostsContainer;