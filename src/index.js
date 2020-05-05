import React from "react";
import ReactDOM from 'react-dom';
import store from "./redux/sroreRedux";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";

const rerenderEntireTree = () => {
    ReactDOM.render (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    )
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});


// const rerenderEntireTree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}/>
//             <App
//                 // state={state}
//                 // dispatch={store.dispatch.bind(store)}
//                 // store={store}
//             />
//         </Provider>
//         </BrowserRouter>, document.getElementById('root')
//     )
// };