import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    cat: null
};

const catsSlice = createSlice({
    name: 'catsSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const [lastEl] = state.cats.slice(-1);
            const id = lastEl ? lastEl.id + 1 : 0
            state.cats.push({id, name: action.payload.name})
        },
        del: (state, action) => {
            const index = state.cats.findIndex(i => i.id === action.payload.id)
            state.cats.splice(index, 1)
        },
        setValue: (state, action) => {
            state.cat = action.payload.cat
        },
        update: (state, action) => {
            const index = state.cats.findIndex(i => i.id === action.payload.id)
            state.cats[index].name = action.payload.name
            state.cat = null
        }
    }
});

const {reducer: catsReducer, actions: {add, del, setValue, update}} = catsSlice;
export default catsReducer;
export const catsActions = {add, del, setValue, update};