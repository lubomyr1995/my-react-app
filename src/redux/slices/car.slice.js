import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    updateCar: null,
    status: null,
    errors: {},
    total_items: null,
    total_pages: null,
    prev: null,
    next: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car)
            const {cars} = thunkAPI.getState();
            thunkAPI.dispatch(getAll({page: cars.total_pages}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carService.delById(id)
            const {cars} = thunkAPI.getState();
            thunkAPI.dispatch(getAll({page: cars.total_pages}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car)
            const {cars} = thunkAPI.getState();
            thunkAPI.dispatch(getAll({page: cars.total_pages}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCar: (state, action) => {
            state.updateCar = action.payload.car
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.pending, state => {
                state.status = 'loading'
            })
            .addCase(getAll.fulfilled, (state, action) => {
                const {total_items, total_pages, prev, next, items} = action.payload;
                state.cars = items
                state.total_items = total_items
                state.total_pages = total_pages
                state.prev = prev
                state.next = next
                state.status = null
                // state.updateCar = null
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(updateCarById.pending, (state) => {
                state.updateCar = null
            })
    }
});

const {reducer: carReducer, actions: {setCar}} = carSlice;

const carActions = {getAll, create, deleteById, updateCarById, setCar};

export default carReducer;
export {carActions}
