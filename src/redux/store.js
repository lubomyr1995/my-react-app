import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./slices/car.slice";

const rootReducer = combineReducers({
    cars: carReducer
});

const setStore = () => configureStore({reducer: rootReducer})

export default setStore
