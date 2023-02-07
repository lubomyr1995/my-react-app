import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    errors: {},
    carUpdate: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data

        } catch (e) {
            return rejectWithValue(e.response.data())
        }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            const {data} = await carService.create(car);
            return thunkAPI.dispatch(createThunk({car: data}))
            // return thunkAPI.dispatch(getAll())
        } catch (e) {
            // console.log(e)
            return thunkAPI.rejectWithValue({status: e.message, errors: e.response.data})
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/del',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.delById(id);
            return dispatch(del({id}))
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car)
            return dispatch(update({id, car}))

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        // createThunk: (state, action) => {
        //     state.cars.push(action.payload.car)
        // },
        del: (state, action) => {
            const index = state.cars.findIndex(i => i.id === action.payload.id)
            state.cars.splice(index, 1)
        },
        setCar: (state, action) => {
            state.carUpdate = action.payload.car
        },
        update: (state, action) => {
            const index = state.cars.findIndex(i => i.id === action.payload.id)
            state.cars[index] = {...state.cars[index], ...action.payload.car}
            state.carUpdate = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.status = null
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(create.rejected, (state, action) => {
                const {status, errors} = action.payload
                state.status = status
                state.errors = errors
            })
    }
})

const {reducer: carReducer, actions: {createThunk, del, setCar, update}} = carSlice;

const carActions = {getAll, create, deleteById, updateById, setCar};
export default carReducer
export {carActions};
