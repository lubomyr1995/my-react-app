import {actionsTypes} from "./actions.types";

const actionsToDispatch = {
    ADD: (item) => ({type: actionsTypes.ADD, payload: item}),
    DEL: (id) => ({type: actionsTypes.DEL, payload: id}),
    SET: (item) => ({type: actionsTypes.SET, payload: item}),
    UPDATE: (id, item) => ({type: actionsTypes.UPDATE, payload: {id, item}})
}

export {actionsToDispatch}