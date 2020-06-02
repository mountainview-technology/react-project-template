import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


const getPosts = createAsyncThunk(
    'posts/getPosts',
    async ( { url }, thunkAPI) =>{
        const response = await fetch(url)
        .then(response => response.json());
        return response;
    }
);

export {getPosts};

const initialState = {
    posts: [],
    isLoading: false,
    error: undefined
};

const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers:{},
    extraReducers:{
        [getPosts.fulfilled]: (state, action) => {
            state.posts = state.posts.concat(action.payload);
            state.isLoading = false;
            state.error = undefined;
        },
        [getPosts.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

const postReducer = postSlice.reducer;
export default postReducer;

