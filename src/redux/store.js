import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import catsReducer from "./slices/cats.slice";

const rootReducer = combineReducers({
    cats: catsReducer
})

const store = configureStore({reducer: rootReducer})

export default store
