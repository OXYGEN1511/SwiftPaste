import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Authentication";
import { postReducer } from "./Post/Post.reducer";
import { messageReducer } from "./Message/message.reducer";
const rootReducers=combineReducers({
 auth:authReducer,
 post:postReducer,
 message:messageReducer
})
export const store1 = legacy_createStore(rootReducers,applyMiddleware(thunk))
export default store1