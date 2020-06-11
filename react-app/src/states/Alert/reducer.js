import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const AlertType = {
    success: "success",
    error: "error",
    warning: "warning"
}

const initialState = {
    message:'',
    type:''
}

const slice = createSlice({
    name:'alert',
    initialState: initialState,
    reducers: {
        alertSuccess: (state, action) => {
            state = { ...action.payload, type: AlertType.success}
        },
        alertError: (state, action) =>{
            state = {...action.payload, type: AlertType.error}
        },
        alertWarning: (state, action) =>{
            state = {...action.payload, type: AlertType.warning}
        }
    }
});

export const {alertError, alertSuccess, alertWarning} = slice.actions;

const alertReducer = slice.reducer;
export {alertReducer};