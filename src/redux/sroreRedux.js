import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from "./navbarReducer";
import friendsReducer from "./friendsReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    friendsPage: friendsReducer
});

const store = createStore(reducers);

export default store;