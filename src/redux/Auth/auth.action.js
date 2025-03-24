import { api, API_BASE_URL } from "../../Config/Api"
import { GET_PROFILE_FAILURE,
   GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
     LOGIN_FAILURE, 
     LOGOUT_FAILURE, 
     LOGOUT_SUCCESS, 
     SEARCH_USER_FAILURE, 
     SEARCH_USER_REQUEST, 
     SEARCH_USER_SUCCESS, 
     UPDATE_PROFILE_FAILURE, 
     UPDATE_PROFILE_REQUEST, 
     UPDATE_PROFILE_SUCCESS } from "./auth.actionType";
import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST } from "./auth.actionType";


export const loginUserAction =(loginData) => async(dispatch) =>{
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/login`,loginData.data)
        console.log("Response from Backend:", data);
        if(data.token){
            localStorage.setItem("jwt",data.token)   
        }
        console.log("login sucess ", data);
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
    }catch(error) {
        console.log("-------------".error)
        dispatch({type:LOGIN_FAILURE,payload:error})
    }
}

// export const registerUserAction =(loginData) => async(dispatch) =>{
//     try {
//         const {data} = await axios.post(${API_BASE_URL}/auth/signup,loginData.data)

//         if(data.jwt){
//             localStorage.setItem("jwt",data.jwt)
// chiru197782@gmail.com   chiru197782@gmail.com
//         }
//         console.log("register success",data)

//         dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
//     } catch (error) { vaishalisahu2007@gmail.com   123456
//         console.log("-------------".error)
        
//         dispatch({type:LOGIN_FAILURE,payload:error})
//     }
// }


export const registerUserAction = (loginData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST }); // Start loading state
    console.log(loginData);

    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, loginData);
    
    console.log("Response from Backend:", data);
    if (data.token) {
      localStorage.setItem("jwt", data.token); // Save token in local storage
    }
    console.log("register success", data); // Log backend response

    // Dispatch success action
    dispatch({ type: REGISTER_SUCCESS, payload: data.token });
  } catch (error) {
    console.error("Register Error:", error.response?.data || error.message); // Log error
    dispatch({ type: REGISTER_FAILURE, payload: error.response?.data || error.message }); // Dispatch failure action
  }
};


export const getProfileAction = (jwt) => async (dispatch) => {
      dispatch({ type: GET_PROFILE_REQUEST}); // Start loading state
      console.log("jwt token: ",jwt);
  try {

    const { data } = await axios.get(
      `${API_BASE_URL}/api/users/profile`, {headers:{
        Authorization:`Bearer ${jwt}`,
      }});

    console.log("Profile.... :", data);
    if (data.token) {
      localStorage.setItem("jwt", data.token); // Save token in local storage
      console.log("register success", data); // Log backend response
    }

//     // Dispatch success action
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
  }
 catch (error) {
    console.error("------------:", error); // Log error
    dispatch({ type: GET_PROFILE_FAILURE,  payload: error.response?.data || error.message}); // Dispatch failure action
  }
};

const jwt = localStorage.getItem("jwt");
export const updateProfileAction = (reqData) => async (dispatch) => {
      dispatch({ type: UPDATE_PROFILE_REQUEST }); // Start loading state
      // console.log(reqData)
      console.log("Request Data:", reqData);
      if (!jwt) {
        console.error("JWT is missing!");
        return;
      }
  try {

    const { data } = await api.put(
      `${API_BASE_URL}/api/users/update`, reqData, {headers:{
        Authorization:`Bearer ${jwt}`,
        "Content-Type": "application/json"
      }
      
    });

    console.log("Update-Profile.... :", data);
//     // if (data.token) {
//     //   localStorage.setItem("jwt", data.token); // Save token in local storage
//     //   console.log("register success", data); // Log backend response
//     // }

//     // Dispatch success action
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.error("------------:", error); // Log error
    dispatch({ type: UPDATE_PROFILE_FAILURE,  payload: error.response?.data || error.message}); // Dispatch failure action
  }
};  


export const searchUser = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_USER_REQUEST}); 
  console.log("jwt token: ",jwt);
try {

const { data } = await api.get(
  `/api/users/search?query=${query}`);

console.log("Search user.... :", data);
dispatch({ type: SEARCH_USER_SUCCESS, payload: data });
}
catch (error) {
console.error("------------:", error); 
dispatch({ type: SEARCH_USER_FAILURE,  payload: error.response?.data || error.message}); 
}
};


export const logoutUserAction = () => (dispatch) => {
  try {
      // Remove the token from local storage
      localStorage.removeItem("jwt");

      // Dispatch logout action
      dispatch({ type: LOGOUT_SUCCESS });

      console.log("User logged out successfully");
  } catch (error) {
      console.error("Logout Error:", error.message);
      dispatch({ type: LOGOUT_FAILURE, payload: error.message });
  }
};
