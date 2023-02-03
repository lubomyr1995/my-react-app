import {actionsTypes} from "../constants";

const initCars = () => ({
    cars: [],
    car: null
})

const myCarsReducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.ADD:
            const [lastEl] = state.cars.slice(-1);
            const id = lastEl ? lastEl.id + 1 : 0
            return {...state, cars: [...state.cars, {id, ...action.payload}]}
        case actionsTypes.DEL:
            const el = state.cars.findIndex(i => i.id === action.payload)
            state.cars.splice(el, 1)
            return {...state}
        case actionsTypes.SET:
            state.car = action.payload
            return {...state}
        case actionsTypes.UPDATE:
            const index = state.cars.findIndex(i => i.id === action.payload.id)
            state.cars[index].brand = action.payload.item.brand
            state.cars[index].price = action.payload.item.price
            state.cars[index].year = action.payload.item.year
            state.car = null
            return {...state}
        default:
            return state
    }
}

export {initCars, myCarsReducer}
