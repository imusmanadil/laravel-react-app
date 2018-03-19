import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Reducers
import merchants from './merchantsReducer';
import posts from './postsReducer';
import auth from './authReducer';
import ajaxLoading from './ajaxLoadingReducer';

const rootReducer = combineReducers({
    auth,
    merchants,
    posts,
    ajaxLoading,
    form: formReducer
});

export default rootReducer;