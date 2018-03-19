import axios from 'axios';
import * as types from './actionTypes';

export function addPost(post){
    return {
        type : types.ADD_POST,
        post 
    };
}
export function setPosts(posts){
    return {
        type : types.SET_POSTS,
        posts
    };
}
export function editPost(post){
    return {
        type : types.EDIT_POST,
        post
    };
}
export function deletePost(id){
    return {
        type : types.DELETE_POST,
        id
    };
}


export function ajaxLoading(status) {
    return { type: types.AJAX_LOADING, status};
}


export function getPosts(){
    return (dispatch) => {
        dispatch(ajaxLoading(true));
        axios.get('http://www.mocky.io/v2/5aa4c0282e0000f105a403ba')
            .then(response=>{
                dispatch(setPosts(response.data));
                dispatch(ajaxLoading(false));
            })
            .catch(error=>{
                console.log(error);
                dispatch(ajaxLoading(false));
            });
    };
}