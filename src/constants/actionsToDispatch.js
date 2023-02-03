import {actionsTypes} from "./actions.types";

const actionsToDispatch = {
    ADD_CAT: (item) => ({type: actionsTypes.ADD_CAT, payload: {name: item}}),
    ADD_DOG: (item) => ({type: actionsTypes.ADD_DOG, payload: {name: item}}),
    DEL_CAT_BY_ID: (id) => ({type: actionsTypes.DEL_CAT_BY_ID, payload: {id}}),
    DEL_DOG_BY_ID: (id) => ({type: actionsTypes.DEL_DOG_BY_ID, payload: {id}}),
    SET_CAT_TO_UPDATE: (item) => ({type: actionsTypes.SET_CAT_TO_UPDATE, payload: item}),
    SET_DOG_TO_UPDATE: (item) => ({type: actionsTypes.SET_DOG_TO_UPDATE, payload: item}),
    UPDATE_CAT_BY_ID: (id, item) => ({type: actionsTypes.UPDATE_CAT_BY_ID, payload: {id, name:item}}),
    UPDATE_DOG_BY_ID: (id, item) => ({type: actionsTypes.UPDATE_DOG_BY_ID, payload: {id, name:item}})
}

export {actionsToDispatch}