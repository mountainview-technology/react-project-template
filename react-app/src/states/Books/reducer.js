import {createSlice} from '@reduxjs/toolkit';
import Books from './data';


const initialState = {
    data: Books
}

const bookSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {
    }
});


const bookReducer = bookSlice.reducer;

export default bookReducer;
