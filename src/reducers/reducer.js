import {actionsTypes} from "../constants";

const initial = () => {
    return {
        cats: [],
        dogs: [],
        cat: null,
        dog: null
    }
}
const reducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.ADD_CAT:
            const [lastCatEl] = state.cats.slice(-1)
            const id = lastCatEl ? lastCatEl.id + 1 : 0
            return {...state, cats: [...state.cats, {id, name: action.payload.name}]}
        case actionsTypes.DEL_CAT_BY_ID:
            const elCat = state.cats.findIndex(i => i.id === action.payload.id)
            state.cats.splice(elCat, 1)
            return {...state}
        case actionsTypes.SET_CAT_TO_UPDATE:
            state.cat = action.payload
            return {...state}
        case actionsTypes.UPDATE_CAT_BY_ID:
            const idCat = state.cats.findIndex(i => i.id === action.payload.id)
            state.cats[idCat].name = action.payload.name
            state.cat = null
            return {...state}

        case actionsTypes.ADD_DOG:
            const lastEl = state.dogs.slice(-1)
            const dogId = lastEl.length ? lastEl[0].id + 1 : 0
            return {...state, dogs: [...state.dogs, {id: dogId, name: action.payload.name}]}
        case actionsTypes.DEL_DOG_BY_ID:
            const elDog = state.dogs.findIndex(i => i.id === action.payload.id)
            state.dogs.splice(elDog, 1)
            return {...state}
        case actionsTypes.SET_DOG_TO_UPDATE:
            state.dog = action.payload
            return {...state}
        case actionsTypes.UPDATE_DOG_BY_ID:
            const idDog = state.dogs.findIndex(i => i.id === action.payload.id)
            state.dogs[idDog].name = action.payload.name
            state.dog = null
            return {...state}
        default:
            return state
    }
}

export {initial, reducer}