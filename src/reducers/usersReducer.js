import {actionsTypes} from "../constants";

const initialUsers = () => []

const myUserReducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.ADD:
            const lastEl = state.slice(-1)
            let id = lastEl.length ? lastEl[0].id + 1 : 0
            return [...state, {id, ...action.payload}]
        case actionsTypes.DEL_BY_ID:
            const index = state.findIndex(index => index.id === action.payload)
            state.splice(index, 1)
            return [...state]
        default:
            return state
    }
}

export {myUserReducer, initialUsers}