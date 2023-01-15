import { put, call, takeEvery } from 'redux-saga/effects';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpSuccess, setIsLoading, signUpFailure } from '../features/userSlice';

import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword, signOutUser, createAuthUserWithEmailAndPassword } from "../utils/firebase/firebase";

function* getUserSnapshot(userAuth, additionalInfo) {
    try {
        const userSnapshot = yield call(() => createUserDocumentFromAuth(userAuth, additionalInfo));
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* workGoogleSignInStart() {
    try {
        const { user } = yield call(() => signInWithGooglePopup());
        yield call(() => getUserSnapshot(user))
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* workEmailSignInStart({ payload: { email, password } }) {
    try {
        const { user } = yield call(() => signInAuthUserWithEmailAndPassword(email, password));
        yield call(() => getUserSnapshot(user))
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* workSignUpStart({ payload: { displayName, email, password } }) {
    try {
        const {user} = yield call(() => createAuthUserWithEmailAndPassword(email, password));
        yield call(() => getUserSnapshot(user, { displayName }))
        yield put(signUpSuccess())
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

function* workCheckUserSession() {
    try {
        const userAuth = yield call(() => getCurrentUser());

        if (!userAuth) {
            yield put(setIsLoading(false));
            return;
        }

        yield call(() => getUserSnapshot(userAuth));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* workSignOutStart() {
    try {
        yield call(() => signOutUser())
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

function* userSaga() {
    yield takeEvery('user/checkUserSession', workCheckUserSession);
    yield takeEvery('user/googleSignInStart', workGoogleSignInStart);
    yield takeEvery('user/emailSignInStart', workEmailSignInStart);
    yield takeEvery('user/signUpStart', workSignUpStart);
    yield takeEvery('user/signOutStart', workSignOutStart);
}

export default userSaga;