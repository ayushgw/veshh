import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AuthError } from 'firebase/auth';

interface IUser {
    createdAt: Date | null;
    displayName: string;
    email: string;
    id: string;
}

interface IUserCredentials {
    email: string;
    password: string;
}

interface IUserState {
    user: IUser;
    isLoading: boolean;
    hasSignedUp: boolean;
    message: string;
    signupError: Error | null;
    signinError: Error | null;
}

const initialState: IUserState = {
    user: {
        createdAt: null,
        displayName: '',
        email: '',
        id: ''
    },
    isLoading: false,
    hasSignedUp: false,
    message: '',
    signupError: null,
    signinError: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<IUser>) => {
            state.user = payload;
        },
        resetError: (state) => {
            state.signupError = null;
            state.signinError = null;
        },
        checkUserSession: (state) => {
            state.isLoading = true;
        },
        setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        googleSignInStart: (state) => {
            state.isLoading = true;
        },
        emailSignInStart: (state, { payload }: PayloadAction<IUserCredentials>) => {
            state.isLoading = true;
        },
        signInSuccess: (state, { payload }: PayloadAction<IUser>) => {
            state.user = payload;
            state.isLoading = false;
            state.message = 'Signed in!';
            sessionStorage.setItem('veshh_user', JSON.stringify(payload));
        },
        signInFailure: (state, { payload }: PayloadAction<Error>) => {
            // console.error("Sign in error", payload);
            state.signinError = payload;
            state.isLoading = false;
        },
        signOutStart: (state) => {
            state.isLoading = true;
        },
        signOutSuccess: (state) => {
            state.user = initialState.user;
            state.isLoading = false;
            state.message = 'Signed out!';
            sessionStorage.removeItem('veshh_user');
        },
        signOutFailure: (state, { payload }: PayloadAction<Error>) => {
            console.error("Sign out error", payload);
            // state.error = payload;
            state.isLoading = false;
        },
        signUpStart: (state, { payload }) => {
            state.isLoading = true;
            state.hasSignedUp = false;
        },
        signUpSuccess: (state) => {
            state.isLoading = false;
            state.hasSignedUp = true;
        },
        signUpFailure: (state, { payload }: PayloadAction<Error>) => {
            // console.error("Sign up error", payload);
            state.signupError = payload;
            state.isLoading = false;
        },
    },
});

export const { setUser, setIsLoading, checkUserSession, googleSignInStart, emailSignInStart, signInSuccess, signInFailure, signOutStart, signOutSuccess, signOutFailure, signUpStart, signUpSuccess, signUpFailure, resetError } = userSlice.actions

export default userSlice.reducer;
