import { CREATE_POST_SUCCESS,CREATE_POST_REQUEST,CREATE_POST_FAILURE, LIKE_POST_REQUEST,CREATE_COMMENT_SUCCESS, CREATE_COMMENT_FAILURE,GET_ALL_POST_FAILURE,CREATE_COMMENT_REQUEST, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_USERS_POST_FAILURE, GET_USERS_POST_REQUEST, GET_USERS_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_SUCCESS } from "./Post.actionType"
import { api } from "../../Config/Api"
// const createPostAction = (postData) => async(dispatch) =>{
  export  const createPostAction =(postData) => async(dispatch) =>{
            dispatch({type:CREATE_POST_REQUEST})
            try{
                const {data} = await api.post('/api/posts', postData)
                dispatch({type:CREATE_POST_SUCCESS,payload:data});
                console.log("create post ",data);
            }catch(error){
                console.log("error ",error)
                dispatch({type:CREATE_POST_FAILURE,payload:error});
            }
    };
// };



  export  const getAllPostAction =() => async(dispatch) =>{
            dispatch({type:GET_ALL_POST_REQUEST});
            try{
                const {data} = await api.get('/api/posts');
                dispatch({type: GET_ALL_POST_SUCCESS,payload:data});
                console.log("get all post ",data);
            }catch(error){
                console.log("error ",error)
                dispatch({type: GET_ALL_POST_FAILURE,payload:error});
            }
    };



    export  const getUsersPostAction =(userId) => async(dispatch) =>{
        dispatch({type:GET_USERS_POST_REQUEST});
        try{
            const {data} = await api.get(`/api/posts/users/${userId}`);
            dispatch({type: GET_USERS_POST_SUCCESS,payload:data});
            console.log("get users post ",data);
        }catch(error){
            console.log("error ",error)
            dispatch({type:GET_USERS_POST_FAILURE,payload:error});
        }
    };




   export  const likedPostAction =(postId) => async(dispatch) =>{
    dispatch({type:LIKE_POST_REQUEST});
    try{
        const {data} = await api.put(`/api/posts/like/${postId}`);
        dispatch({type: LIKE_POST_SUCCESS,payload:data});
        console.log("LIKED all post ",data);
    }catch(error){
        console.log("error ",error)
        dispatch({type:LIKE_POST_FAILURE,payload:error});
    }
  };

   
  export const createCommentAction = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });

    console.log("Request Data:", reqData);  // Debugging log

    try {
        const { data } = await api.post(`/api/comments/post/${reqData.postId}`, reqData.data);
        dispatch({ type: CREATE_COMMENT_SUCCESS,payload:data });
        console.log("Created comment:", data);
    } catch (error) {
        console.error("Error in creating comment:", error.response?.data || error.message);
        dispatch({ type: CREATE_COMMENT_FAILURE, payload: error });
    }
};






