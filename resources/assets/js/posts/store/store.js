import { createStore,combineReducers } from "redux";
import * as reducers from "./reducers";
import initialState from "./initialState";

const postsReducer =  reducers.postsReducer;
const errorReducer =  reducers.errorReducer;


console.log(reducers);

const rootReducers = combineReducers({
    posts : postsReducer,
    error : errorReducer
});

const store = createStore(rootReducers,initialState);

export default store;