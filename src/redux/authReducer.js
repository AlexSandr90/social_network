import {authApi} from "../api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    }
});

const getAuthUserData = () => dispatch => {
    authApi.getMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {id, email, login} = res.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
};


export {
    getAuthUserData,
}

export default authReducer;