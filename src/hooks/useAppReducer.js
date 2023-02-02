import {useContext} from "react";
import {StateContext} from "../hoc";

const useAppReducer = (cb) => cb(useContext(StateContext));

export {useAppReducer};