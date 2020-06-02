import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


const albumSlice = createSlice({
    name: "album",
    initialState: {
        albums: [],
        isLoading: false,
        error: undefined,
        photos: []
    },
    reducers:{
        dataRequested: (state, action) => {
            state.isLoading = true;
        },
        albumsLoaded: (state, action) => {
            state.albums = action.payload;
            state.isLoading = false;
        },
        photoLoaded: (state, action) => {
            state.photos = action.payload;
            state.isLoading = false;
        },
        apiError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {dataRequested, albumsLoaded, photoLoaded, apiError} = albumSlice.actions;

const albumReducer = albumSlice.reducer;
export default albumReducer;

