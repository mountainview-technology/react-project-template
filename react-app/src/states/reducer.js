import postReducer from './Posts/reducer';
import albumReducer from './Albums/reducer';
import { combineReducers } from 'redux';
import bookReducer from './Books/reducer';
import { accountReducer } from './Account/reducer';
import { alertReducer } from './Alert/reducer';

const rootReducer = combineReducers({
    posts: postReducer,
    albums: albumReducer,
    books: bookReducer,
    account: accountReducer,
    alert: alertReducer
});

export default rootReducer;