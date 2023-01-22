import { put, call, takeEvery } from 'redux-saga/effects';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpSuccess, setIsLoading, signUpFailure } from '../features/userSlice';

import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword, signOutUser, createAuthUserWithEmailAndPassword } from "../utils/firebase";

function* handleSignInSuccess(userSnapshot) {
    const userdata = userSnapshot.data();
    delete userdata["createdAt"];
    yield put(signInSuccess({ id: userSnapshot.id, ...userdata }));
}

function* getUserSnapshot(userAuth, additionalInfo) {
    try {
        const userSnapshot = yield call(() => createUserDocumentFromAuth(userAuth, additionalInfo));
        return userSnapshot;
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* workGoogleSignInStart() {
    try {
        const { user } = yield call(() => signInWithGooglePopup());
        const userSnapshot = yield call(() => getUserSnapshot(user))
        yield call(() => handleSignInSuccess(userSnapshot));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* workEmailSignInStart({ payload: { email, password } }) {
    try {
        const { user } = yield call(() => signInAuthUserWithEmailAndPassword(email, password));
        const userSnapshot = yield call(() => getUserSnapshot(user));
        yield call(() => handleSignInSuccess(userSnapshot));
    } catch (error) {
        return yield put(signInFailure(error));
    }
}

function* workSignUpStart({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield call(() => createAuthUserWithEmailAndPassword(email, password));
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

        const userSnapshot = yield call(() => getUserSnapshot(userAuth));
        yield call(() => handleSignInSuccess(userSnapshot));
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