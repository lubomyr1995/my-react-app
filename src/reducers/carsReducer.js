import {actionsTypes} from "../constants";

const initialCars = () => []

const myCarsReducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.ADD:
            const [lastEl] = state.slice(-1)
            const id = lastEl.length ? lastEl.id + 1 : 0
            return [...state, {id, ...action.payload}]
        case actionsTypes.DEL_BY_ID:
            const index = state.findIndex(i => i.id === action.payload)
            state.splice(index, 1)
            return [...state]
        default:
            return state
    }
}

export {initialCars, myCarsReducer}