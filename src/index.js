import React from "react";
import ReactDOM from 'react-dom';
import store from "./redux/sroreRedux";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";

const rerenderEntireTree = state => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>, document.getElementById('root')
    )
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});