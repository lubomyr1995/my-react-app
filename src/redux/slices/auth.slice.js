import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {
    isAuth: false,
    loginErrors: null
}


const login = createAsyncThunk(
    'authSlice',
    async ({userCredential}, thunkAPI) => {
        try {
            const {data} = await authService.login(userCredential)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuthF: state => {
            state.isAuth = false
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true
                state.loginErrors = null
                authService.setTokens(action.payload)
            })
            .addCase(login.rejected, (state, action) => {
                const {status, data} = action.payload;
                if (status === 400 || status === 401) {
                    state.loginErrors = data
                }
            })
    }
})

const {reducer: authReducer, actions: {setAuthF}} = authSlice;

const authActions = {login, setAuthF};

export default authReducer;
export {authActions}