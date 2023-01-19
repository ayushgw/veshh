import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    hasSignedUp: false,
    message: '',
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
        },
        resetError: (state) => {
            state.error = null;
        },
        checkUserSession: (state) => {
            state.isLoading = true;
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        googleSignInStart: (state) => {
            state.isLoading = true;
        },
        emailSignInStart: (state) => {
            state.isLoading = true;
        },
        signInSuccess: (state, { payload }) => {
            state.user = payload;
            state.isLoading = false;
            state.message = 'Signed in!';
            sessionStorage.setItem('veshh_user', JSON.stringify(payload));
        },
        signInFailure: (state, { payload }) => {
            // console.error("Sign in error", payload);
            state.error = payload;
            state.isLoading = false;
        },
        signOutStart: (state) => {
            state.isLoading = true;
        },
        signOutSuccess: (state) => {
            state.user = null;
            state.isLoading = false;
            state.message = 'Signed out!';
            sessionStorage.removeItem('veshh_user');
        },
        signOutFailure: (state, { payload }) => {
            console.error("Sign out error", payload);
            state.error = payload;
            state.isLoading = false;
        },
        signUpStart: (state) => {
            state.isLoading = true;
            state.hasSignedUp = false;
        },
        signUpSuccess: (state) => {
            state.isLoading = false;
            state.hasSignedUp = true;
        },
        signUpFailure: (state, { payload }) => {
            console.error("Sign up error", payload);
            state.error = payload;
            state.isLoading = false;
        },
    },
});

export const { setUser, setIsLoading, checkUserSession, googleSignInStart, emailSignInStart, signInSuccess, signInFailure, signOutStart, signOutSuccess, signOutFailure, signUpStart, signUpSuccess, signUpFailure, resetError } = userSlice.actions

export default userSlice.reducer;
