import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostAC,
    updatePostDataAC
} from "../../../redux";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        postData: state.profilePage.postData,
        newPostData: state.profilePage.newPostData,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPost: () => dispatch(addPostAC()),
        updateNewPostData: text => dispatch(updatePostDataAC(text)),
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;