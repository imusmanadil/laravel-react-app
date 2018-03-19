const ADD_POST = "ADD_POST";
const CHANGE_ERROR = "CHANGE_ERROR";
export const addPost = (post) => {
    return {
        type : ADD_POST,
        payload : post
    };
};

 export const changeError = (error) => {
     return {
         type : CHANGE_ERROR,
         payload : error
     };
 };