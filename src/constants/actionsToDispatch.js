import {actionsTypes} from "./actions.types";

const actionsToDispatch = {
    ADD: (item) => ({type: actionsTypes.ADD, payload: item}),
    DEL_BY_ID: (id) => ({type: actionsTypes.DEL_BY_ID, payload: id})
}

export {actionsToDispatch}