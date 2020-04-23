const ADD_POST = 'ADD-POST';
const UPDATE_POST_DATA = 'UPDATE-POST-DATA';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let post = {
                id: state.postData.length + 1,
                message: state.newPostData,
                likesCount: 0,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaqesW_4YUvdVSr3HyJVwKutuNjNZErzsrspdGMrG94FuYflnf'
            };

            if (state.newPostData !== undefined && state.newPostData.length > 0) {
                state.postData.push(post);
                // console.log(this._state.profilePage.postData);
                state.newPostData = '';
                return state;
            }

            return state;

        case UPDATE_POST_DATA:
            state.newPostData = action.message;
            return state;
        default:
            return state;
    }
};

export default profileReducer;