import {createContext, useReducer} from "react";
import {initialCars, initialUsers, myCarsReducer, myUserReducer} from "../reducers";

export const StateContext = createContext(null);

const StateProvider = ({children}) => {
    const reducers = {
        userReducer: useReducer(myUserReducer, null, initialUsers),
        carReducer: useReducer(myCarsReducer, null, initialCars)
    }
    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {StateProvider};