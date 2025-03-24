import { act } from "react";
import { CREATE_COMMENT_SUCCESS, CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS } from "./Post.actionType";

const initialState = {
    post: null,
    loading: false,
    error: null,
    posts: [],
    like: null,
    comments: [],  // ✅ Ensure it's always an array
    newComments:[]
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST_REQUEST:
        case GET_ALL_POST_REQUEST:
        case LIKE_POST_REQUEST:
            return { ...state, error: null, loading: true };

        case CREATE_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                posts: [action.payload, ...state.posts],  // ✅ Fixed from `state.post`
                loading: false,
                error: null
            };

        case GET_ALL_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload,  
                comments: action.payload.flatMap(post => post.comments || []),  // ✅ Extracts all comments safely
                loading: false,
                error: null
            };

        case LIKE_POST_SUCCESS:
            return {
                ...state,
                like: action.payload,
                posts: state.posts.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
                loading: false,
                error: null
            };

        case CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                newComments:action.payload,
                // comments: Array.isArray(state.comments) 
                //     ? [action.payload, ...state.comments]  // ✅ Ensure `state.comments` is iterable
                //     : [action.payload],  // ✅ Fallback for undefined `comments`
                loading: false,
                error: null
            };

        case CREATE_POST_FAILURE:
        case GET_ALL_POST_FAILURE:
        case LIKE_POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
};
