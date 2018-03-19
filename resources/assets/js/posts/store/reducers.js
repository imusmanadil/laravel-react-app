import initialState from './initialState';
const ADD_POST = "ADD_POST";
const CHANGE_ERROR = "CHANGE_ERROR";

export const postsReducer = (state=[],action) => {
     switch (action.type) {
         case ADD_POST:
             return [
                 ...state,
                 action.payload
             ];
         default:
      return state;
     }
};



export const errorReducer = (state=false,action)=>{
    switch (action.type) {
        case CHANGE_ERROR:
            return action.payload;
        default :
        return state;
    }
};