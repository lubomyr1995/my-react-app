import {actionsTypes} from "../constants";

const initUsers = () => (
    {
        users: [],
        user: null
    })

const myUsersReducer = (state, action) => {
    switch (action.type) {
        case (actionsTypes.ADD):
            const [lastEl] = state.users.slice(-1);
            const id = lastEl ? lastEl.id + 1 : 0
            return {...state, users: [...state.users, {id, ...action.payload}]}
        case (actionsTypes.DEL):
            const index = state.users.findIndex(i => i.id === action.payload)
            state.users.splice(index, 1)
            return {...state}
        case (actionsTypes.SET):
            state.user = action.payload
            return {...state}
        case (actionsTypes.UPDATE):
            const indexU = state.users.findIndex(i => i.id === action.payload.id)
            state.users[indexU].name = action.payload.item.name
            state.users[indexU].surname = action.payload.item.surname
            state.users[indexU].age = action.payload.item.age
            state.user = null
            return {...state}
        default:
            return state
    }
}

export {initUsers, myUsersReducer};