import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Initial action to load merchant list from API
import { getMerchants } from './actions/merchantActions';
import {getPosts} from './actions/postActions';
import {login} from './actions/authActions';
// Store config
import configureStore from './store/configureStore';
// Service Worker
import registerServiceWorker from './registerServiceWorker';
// App component
import App from './App';


const store = configureStore();

// Load merchant list from API as soon as application initiates
store.dispatch(getMerchants());
store.dispatch(getPosts());
store.dispatch(login({
    email : "hasanjaved065@gmail.com",
    password : "12345"
}));

window.store = store;
console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
