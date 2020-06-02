import { all } from 'redux-saga/effects';

import albumsSaga from './Albums/sagas';

export default function* rootSaga(){
    yield all([
        ...albumsSaga
    ]);
};