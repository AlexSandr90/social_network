import React from "react";

import Post from "./post";


import p from './myPosts.module.css';


import {
    addPostActionCreater,
    updatePostDataActionCreater,
} from "../../../redux";

const MyPosts = props => {

    const {
        posts,
        postsBlock
    } = p;

    const {
        postData,
        newPostData,
    } = props;

    const PostItem = postData.map(element => (
        <Post
            key={element.id}
            message={element.message}
            likeCount={element.likesCount}
            avatarUrl={element.avatar}
        />)
    );

    const postMessage = React.createRef();

    const newPostMessage = () => props
        .dispatch(addPostActionCreater());

    const onPostChange = () => props
        .dispatch(updatePostDataActionCreater(postMessage.current.value));

    return (
        <div className={postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <p>
                    <textarea
                        ref={ postMessage }
                        value={ newPostData }
                        onChange={ onPostChange }
                    />
                </p>
                <p>
                    <button onClick={ newPostMessage } >Add post</button>
                </p>
            </div>
            <div className={posts}>
                { PostItem }
            </div>
        </div>
    )
};

export default MyPosts;