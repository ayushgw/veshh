import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    hasSignedUp: false,
    message: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
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
        signInFailure: (state, {payload}) => {
            console.error("Sign in error", payload);
            state.isLoading = false;
            state.message = 'Failed to sign in!';
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
        signOutFailure: (state, {payload}) => {
            console.error("Sign out error", payload);
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
            console.error("Sign up error", payload);
            state.isLoading = false;
            state.message = 'Failed to sign up!';
        },
    },
});

export const { setUser, setIsLoading, checkUserSession, googleSignInStart, emailSignInStart, signInSuccess, signInFailure, signOutStart, signOutSuccess, signOutFailure, signUpStart, signUpSuccess, signUpFailure } = userSlice.actions

export default userSlice.reducer;
