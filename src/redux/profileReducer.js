import {
    usersAPI,
    profileAPI
} from "../api";

const ADD_POST = 'ADD-POST';
const SET_STATUS = 'SET_STATUS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_POST_DATA = 'UPDATE-POST-DATA';

const initialState = {
    postData: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 12,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaqesW_4YUvdVSr3HyJVwKutuNjNZErzsrspdGMrG94FuYflnf'
        },
        {
            id: 2,
            message: 'Its my first post',
            likesCount: 102,
            avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
        },
        {
            id: 3,
            message: 'You are Superman',
            likesCount: 2,
            avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'
        },
        {
            id: 4,
            message: 'You are so sexy',
            likesCount: 1,
            avatar: 'https://pristor.ru/wp-content/uploads/2017/03/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8F%D0%BC%D0%B8-%D1%81%D0%BE-%D1%81%D0%BC%D1%8B%D1%81%D0%BB%D0%BE%D0%BC-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-13-320x320.jpg'
        },
        {
            id: 5,
            message: 'You are so sexy',
            likesCount: 15,
            avatar: 'https://steamuserimages-a.akamaihd.net/ugc/927045848749581623/9C40119AF9CDDEE16EC0B9D40CF04AF15C6AB3C5/'
        },
        {
            id: 6,
            message: 'You are so sexy',
            likesCount: 98,
            avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
        },
        {
            id: 7,
            message: 'You are so sexy',
            likesCount: 0,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaqesW_4YUvdVSr3HyJVwKutuNjNZErzsrspdGMrG94FuYflnf'
        },
    ],
    newPostData: 'it-kamasutra.com',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:

            let post = {
                id: state.postData.length + 1,
                message: state.newPostData,
                likesCount: 0,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaqesW_4YUvdVSr3HyJVwKutuNjNZErzsrspdGMrG94FuYflnf'
            };

            if (state.newPostData !== undefined && state.newPostData.length > 0) {
                return  {
                    ...state,
                    newPostData: '',
                    postData: [...state.postData, post],
                };
            }
        case UPDATE_POST_DATA:
            return  {
                ...state,
                newPostData: action.message
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

const addPostAC = () => ({type: ADD_POST});
const updatePostDataAC = message => ({type: UPDATE_POST_DATA, message});

const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
const setStatus = status => ({type: SET_STATUS, status});

const getStatus = status => dispatch => {
    profileAPI.getStatus(status)
        .then(res => {
            dispatch(setStatus(res.data));
        })
};

const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

const getUserProfile = userId => dispatch => {
    usersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data));
        })
};

export {
    addPostAC,
    setStatus,
    getStatus,
    updateStatus,
    getUserProfile,
    setUserProfile,
    updatePostDataAC
}

export default profileReducer;