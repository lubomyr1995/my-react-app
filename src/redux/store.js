import {combineReducers, configureStore} from "@reduxjs/toolkit";
import carReducer from "./slices/car.slice";
import authReducer from "./slices/auth.slice";

const rootReducer = combineReducers({
    cars: carReducer,
    auth: authReducer
})

const setStore = () => configureStore({reducer: rootReducer});

export default setStore