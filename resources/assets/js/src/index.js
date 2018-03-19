import React,{ Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Initial action to load merchant from api

import { getMerchants } from "./actions/merchantActions";
import { configureStore } from "./store/configureStore";

// Main core App component
import App from "./App";

const store = configureStore();
store.dispatch(getPosts);

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
);
