import React, { Component } from 'react';
import {render } from "react-dom";
import store from "./store/store";
import {addPost,changeError} from "./action";
import Posts from "./componet";
import {Provider} from 'react-redux';
import AddPostClass from './addPost';


console.log("working");

// console.log(store.getState());

let post = {
    title: "This is new Post",
    body: "This will be a great Post",
    interesting: true
};

let error = true;

store.dispatch(
    addPost(post)
);

store.dispatch(
    changeError(error)
);

console.log(store.getState());

render(
    <Provider store={store}>
        <AddPostClass/>
    </Provider>,
    document.getElementById('root'));