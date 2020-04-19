import React from "react";
import ReactDOM from 'react-dom';
import store from "./redux";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";

const rerenderEntireTree = state => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    )
};

rerenderEntireTree(store.getState());

store.subsribe(rerenderEntireTree);