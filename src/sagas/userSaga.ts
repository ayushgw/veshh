import { put, call, takeEvery } from 'typed-redux-saga/macro';
import { User } from 'firebase/auth';
import { QueryDocumentSnapshot } from 'firebase/firestore';

import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpSuccess, setIsLoading, signUpFailure } from '../features/userSlice';
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword, signOutUser, createAuthUserWithEmailAndPassword, IAdditionalInfo, IUserData } from "../utils/firebase";


interface IEmailSignInStart {
    type: "user/emailSignInStart",
    payload: {
        email: string,
        password: string
    }
}


interface ISignUpStart {
    type: "user/signUpStart",
    payload: {
        displayName: string,
        email: string,
        password: string
    }
}

function* getUserSnapshot(userAuth: User, additionalInfo?: IAdditionalInfo) {
    try {
        const userSnapshot = yield* call(() => createUserDocumentFromAuth(userAuth, additionalInfo));
        return userSnapshot;
    } catch (error) {
        yield* put(signInFailure(error as Error));
    }
}

function* handleSignInSuccess(userSnapshot: QueryDocumentSnapshot<IUserData> | void) {
    if(userSnapshot) {
        const userdata = userSnapshot.data();
        yield* put(signInSuccess({ id: userSnapshot.id, ...userdata }));
    }
    // delete userdata["createdAt"];
}

function* workGoogleSignInStart() {
    try {
        const { user } = yield* call(() => signInWithGooglePopup());
        const userSnapshot = yield* call(() => getUserSnapshot(user));
        if(userSnapshot) {
            yield* call(() => handleSignInSuccess(userSnapshot));
        }
    } catch (error) {
        yield* put(signInFailure(error as Error));
    }
}

function* workEmailSignInStart({ payload: { email, password } }: IEmailSignInStart) {
    try {
        const userCredentials = yield* call(() => signInAuthUserWithEmailAndPassword(email, password));

        if(userCredentials) {
            const { user } = userCredentials;
            const userSnapshot = yield* call(() => getUserSnapshot(user));
            yield* call(() => handleSignInSuccess(userSnapshot));
        }
        
    } catch (error) {
        return yield* put(signInFailure(error as Error));
    }
}

function* workSignUpStart({ payload: { displayName, email, password } }: ISignUpStart) {
    try {
        const userCredential = yield* call(() => createAuthUserWithEmailAndPassword(email, password));

        if(userCredential) {
            const { user } = userCredential;
            yield* call(() => getUserSnapshot(user, { displayName }))
            yield* put(signUpSuccess())
        }

    } catch (error) {
        yield* put(signUpFailure(error as Error));
    }
}

function* workCheckUserSession() {
    try {
        const userAuth = yield* call(() => getCurrentUser());

        if (!userAuth) {
            yield* put(setIsLoading(false));
            return;
        }

        const userSnapshot = yield* call(() => getUserSnapshot(userAuth));
        yield* call(() => handleSignInSuccess(userSnapshot));
    } catch (error) {
        yield* put(signInFailure(error as Error));
    }
}

function* workSignOutStart() {
    try {
        yield* call(() => signOutUser())
        yield* put(signOutSuccess());
    } catch (error) {
        yield* put(signOutFailure(error as Error));
    }
}

function* userSaga() {
    yield* takeEvery('user/checkUserSession', workCheckUserSession);
    yield* takeEvery('user/googleSignInStart', workGoogleSignInStart);
    yield* takeEvery('user/emailSignInStart', workEmailSignInStart);
    yield* takeEvery('user/signUpStart', workSignUpStart);
    yield* takeEvery('user/signOutStart', workSignOutStart);
}

export default userSaga;