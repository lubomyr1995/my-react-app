import {createContext, useReducer} from "react";
import {initCats, initUsers, myCatsReducer, myUsersReducer} from "../reducers";
import {initCars, myCarsReducer} from "../reducers";

export const StateContext = createContext(null);
const StateProvider = ({children}) => {
    const reducers = {
        usersReducer: useReducer(myUsersReducer, null, initUsers),
        carsReducer: useReducer(myCarsReducer, null, initCars),
        catsReducer: useReducer(myCatsReducer, null, initCats)
    }
    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {StateProvider};