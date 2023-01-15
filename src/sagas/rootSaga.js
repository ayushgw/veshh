import { all, call } from 'redux-saga/effects'

import productsSaga from "../sagas/productsSaga";
import userSaga from "../sagas/userSaga";

export function* rootSaga() {
    yield all([call(productsSaga), call(userSaga)]);
}