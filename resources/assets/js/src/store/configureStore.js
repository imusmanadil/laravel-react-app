import { createStore,applyMiddleware,compose } from "redux";
// To handle async actions (like api calls ) in store.
import thunk from "redux-thunk";

// import the all the reducers
import reducers from './reducers';
import initialState from './initialState.json';

const configureStore  = () => {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    );
};

