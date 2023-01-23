import { all, call } from 'typed-redux-saga'

import productsSaga from "./productsSaga";
import userSaga from "./userSaga";

export function* rootSaga() {
    yield* all([call(productsSaga), call(userSaga)]);
}