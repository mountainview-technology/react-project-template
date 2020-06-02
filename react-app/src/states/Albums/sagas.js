import {takeEvery, call, put} from 'redux-saga/effects';
import { albumsLoaded, apiError, dataRequested } from './reducer';

function* watcherSaga(){
    yield takeEvery(dataRequested.toString(), workerSaga);
}

function* workerSaga(action){
    try{
        const payload = yield call(getData, action.payload.url);
        yield put(albumsLoaded(payload));
    } catch(e) {
        yield put(apiError(e))
    }
}

function getData(url){
    return fetch(url)
    .then(response => response.json());
}


export default [
    watcherSaga(),
  ];
  
