import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    cars: ICar[]
    errors: any
    updatedCar: ICar | null
}

const initialState: IState = {
    cars: [],
    errors: {},
    updatedCar: null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

const create = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue, dispatch}) => {
        try {
            await carService.create(car)
            dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

const deleteById = createAsyncThunk<void, { id: string }>(
    'carSlice/deleteById',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            await carService.deleteById(id)
            dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const updateById = createAsyncThunk<void, { id: string, car: ICar }>(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue, dispatch}) => {
        try {
            await carService.updateById(id, car)
            dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const carSlice = createSlice(
    {
        name: 'carSlice',
        initialState,
        reducers: {
            setCar: (state, action) => {
                state.updatedCar = action.payload.car
            }
        },
        extraReducers: builder => {
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.cars = action.payload
                    state.updatedCar = null
                    state.errors = null
                })
                .addCase(getAll.rejected, (state, action) => {
                    state.errors = action.payload
                })
                .addCase(create.rejected, (state, action) => {
                    state.errors = action.payload
                })
                .addCase(deleteById.rejected, (state, action) => {
                    state.errors = action.payload
                })
                .addCase(updateById.rejected, (state, action) => {
                    state.errors = action.payload
                })
        }
    }
);

const {reducer: carReducer, actions: {setCar}} = carSlice;

const carActions = {getAll, create, deleteById, setCar, updateById}

export {carActions, carReducer}