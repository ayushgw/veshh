import { put, call, takeEvery } from 'typed-redux-saga/macro';
import { getProductsFailure, getProductsSuccess } from '../features/productsSlice';

import { getCategoriesAndDocuments } from "../utils/firebase";

function* workGetProductsFetch() {
    try {
        const products = yield* call(() => getCategoriesAndDocuments());
        yield* put(getProductsSuccess(products));
    } catch (error) {
        yield* put(getProductsFailure(error as Error));
    }
}

function* productsSaga() {
    yield* takeEvery('products/getProductsFetch', workGetProductsFetch);
}

export default productsSaga;