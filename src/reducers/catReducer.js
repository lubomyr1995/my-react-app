import {actionsTypes} from "../constants";

const initCats = () => ({
    cats: [],
    cat: null
})

const myCatsReducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.ADD:
            const [lastEl] = state.cats.slice(-1);
            const id = lastEl ? lastEl.id + 1 : 0
            return {...state, cats: [...state.cats, {id, ...action.payload}]}
        case actionsTypes.DEL:
            const el = state.cats.findIndex(i => i.id === action.payload)
            state.cats.splice(el, 1)
            return {...state}
        case actionsTypes.SET:
            state.cat = action.payload
            return {...state}
        case actionsTypes.UPDATE:
            const index = state.cats.findIndex(i => i.id === action.payload.id)
            state.cats[index].name = action.payload.item
            state.cat = null
            return {...state}
        default:
            return state
    }
}

export {initCats, myCatsReducer}