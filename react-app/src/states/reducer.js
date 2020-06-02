import postReducer from './Posts/reducer';
import albumReducer from './Albums/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    posts: postReducer,
    albums: albumReducer
});

export default rootReducer;