import {useReducer} from "react";
import {initial, reducer} from "../reducers";

const useAnimalsReducer = () => useReducer(reducer, null, initial)


export {useAnimalsReducer}