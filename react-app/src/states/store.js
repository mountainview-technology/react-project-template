import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import {consoleMiddleware} from '../middleware/index';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import thunk from 'redux-thunk';


const initialiseSagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer,
    applyMiddleware(
        consoleMiddleware, //sample for middleware
        thunk, // choose between thunk and saga, you might don't need both
        initialiseSagaMiddleware
        )
    );

initialiseSagaMiddleware.run(sagas);

export default store;

