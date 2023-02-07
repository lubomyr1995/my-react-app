import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import postReducer from "./slices/post.slice";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
})

const setStore = () => configureStore({reducer: rootReducer})

export default setStore