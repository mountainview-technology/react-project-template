import postReducer from './Posts/reducer';
import albumReducer from './Albums/reducer';
import { combineReducers } from 'redux';
import bookReducer from './Books/reducer';

const rootReducer = combineReducers({
    posts: postReducer,
    albums: albumReducer,
    books: bookReducer
});

export default rootReducer;