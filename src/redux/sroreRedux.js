import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import authReducer from "./authReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from "./friendsReducer";

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    navbarPage: navbarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;