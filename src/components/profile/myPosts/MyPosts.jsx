import React from "react";
import Post from "./post";
import p from './myPosts.module.css';
import AddPostForm from "../addPostForm/addPostForm";

const MyPosts = props => {

    const {
        posts,
        postsBlock
    } = p;

    const {
        postData,
    } = props;

    const postItem = postData.map(element => (
        <Post
            key={element.id}
            message={element.message}
            likeCount={element.likesCount}
            avatarUrl={element.avatar}
        />)
    );

    const onAddPost = values => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={postsBlock}>
            <h3>
                My posts
            </h3>
            <AddPostForm onSubmit={onAddPost} />
            <div className={posts}>
                { postItem }
            </div>
        </div>
    )
};

export default MyPosts;
