import React from "react";
import Post from "./post";
import p from './myPosts.module.css';

const MyPosts = props => {

    const {
        posts,
        postsBlock
    } = p;

    const {
        newPostData,
    } = props;

    const postItem = props.postData.map(element => (
        <Post
            key={element.id}
            message={element.message}
            likeCount={element.likesCount}
            avatarUrl={element.avatar}
        />)
    );

    const postMessage = React.createRef();

    const newPostMessage = () => props.addPost();

    const onPostChange = () => props
        .updateNewPostData(postMessage.current.value);

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
                { postItem }
            </div>
        </div>
    )
};

export default MyPosts;