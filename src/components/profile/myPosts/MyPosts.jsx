import React from "react";
import Post from "./post";
import p from './myPosts.module.css';
import AddPostForm from "../addPostForm/addPostForm";
import {Field, reduxForm} from "redux-form";

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


// const AddPostForm = props => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <p>
//                 <Field
//                     component='textarea'
//                     name='newPostText'
//                     placeholder='it-kamasutra.com'
//                 />
//             </p>
//             <p>
//                 <button>Add post</button>
//             </p>
//         </form>
//     )
// };

// const AddPostFormRedux = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm);

export default MyPosts;
