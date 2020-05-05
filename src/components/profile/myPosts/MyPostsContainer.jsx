import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreater,
    updatePostDataActionCreater
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
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        updateNewPostData: text => {
            dispatch(updatePostDataActionCreater(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;



// const MyPostsContainer = props => {
//
//     const state = props.store.getState();
//
//     const addPost = () => props
//         .store.dispatch(addPostActionCreater());
//
//     const onPostChange = text => {
//         let action = updatePostDataActionCreater(text);
//         props.store.dispatch(action);
//     };
//
//     return (
//         <MyPosts
//             // addPost={addPost}
//             postData={state.profilePage.postData}
//             newPostData={state.profilePage.newPostData}
//             // updateNewPostData={onPostChange}
//         />
//     )
// };