import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services";

const initialState = {
    users: [],
    status: null,
    errors: {},
    selectedUser: null
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await usersService.getById(id)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload
                state.status = null
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedUser = action.payload
            })
            .addCase(getById.rejected, (state, action) => {
                state.errors = action.payload
            })

    }
})

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;
const userActions = {getAll, getById, setSelectedUser}

export default userReducer
export {userActions}