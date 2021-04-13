import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostAC,
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
        addPost: newPostText => dispatch(addPostAC(newPostText)),
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
