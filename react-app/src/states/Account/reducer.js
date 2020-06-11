import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { accountService } from '../../services';
import { alertError } from '../Alert/reducer';

const login = createAsyncThunk(
    "account/login",
    async ({email, password}, thunkApi) =>{
        const user = await accountService
        .login(email, password)
        .then(user =>{
            return user;
        })
        .catch(response => {
            thunkApi.dispatch(alertError({message: response}))
            return {};
        });
        return user;
    }
);

const logout = createAsyncThunk(
    "account/logout",
    async (arg, thunkApi) =>{
        await accountService.logout().catch(error =>{
            thunkApi.dispatch(alertError({message: error}))
        });
        
    }
);

const initialState = {
    user: {},
    isLoggingIn: false
}

const slice = createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {

    },
    extraReducers:{
        [login.pending]: (state, action) => {
            state.isLoggingIn = true;
            state.username = {};
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggingIn = false;
            state.username = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.isLoggingIn = false;
        },
        [logout.pending]: (state, action) => {
        },
        [logout.rejected]: (state, action) => {
            state.isLoggingIn = false;
            state.user = {};
        },
        [logout.fulfilled]: (state, action) => {
        }
    }
});

export {login, logout};
const accountReducer = slice.reducer;
export {accountReducer};