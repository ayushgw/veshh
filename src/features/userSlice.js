import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    hasSignedIn: false,
    hasSignedUp: false,
    message: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        checkUserSession: (state) => {
            state.isLoading = true;
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        googleSignInStart: (state) => {
            state.isLoading = true;
            state.hasSignedIn = false;
        },
        emailSignInStart: (state) => {
            state.isLoading = true;
            state.hasSignedIn = false;
        },
        signInSuccess: (state, { payload }) => {
            state.user = payload;
            state.isLoading = false;
            state.hasSignedIn = true;
            state.message = 'Signed in!';
        },
        signInFailure: (state, {payload}) => {
            console.log("Sign in error", payload);
            state.isLoading = false;
            state.message = 'Failed to sign in!';
        },
        signOutStart: (state) => {
            state.isLoading = true;
        },
        signOutSuccess: (state) => {
            state.user = null;
            state.isLoading = false;
            state.hasSignedIn = false;
            state.message = 'Signed out!';
        },
        signOutFailure: (state, {payload}) => {
            console.log("Sign out error", payload);
            state.isLoading = false;
            state.message = 'Failed to sign out!';
        },
        signUpStart: (state) => {
            state.isLoading = true;
            state.hasSignedUp = false;
        },
        signUpSuccess: (state) => {
            state.isLoading = false;
            state.hasSignedUp = true;
            state.message = 'Signed up! You can sign in now!';
        },
        signUpFailure: (state, {payload}) => {
            console.log("Sign up error", payload);
            state.isLoading = false;
            state.message = 'Failed to sign up!';
        },
    },
});

export const { setIsLoading, checkUserSession, googleSignInStart, emailSignInStart, signInSuccess, signInFailure, signOutStart, signOutSuccess, signOutFailure, signUpStart, signUpSuccess, signUpFailure } = userSlice.actions

export default userSlice.reducer;
