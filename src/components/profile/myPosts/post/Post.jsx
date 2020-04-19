import React from "react";

import post from './post.module.css';

const Post = props => {

    const {
        item,
        text,
        avatar,
        comment
    } = post;

    const {
        message,
        avatarUrl,
        likeCount
    } = props;

    return (
        <div className={item}>
            <div className={comment}>
                <img
                    src={avatarUrl}
                    alt="avatar"
                    className={avatar}
                />
                <p className={text}>
                    { message }
                </p>
            </div>
            <span>like {likeCount} </span>
        </div>
    )
};

export default Post;