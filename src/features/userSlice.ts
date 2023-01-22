import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    displayName: string;
    email: string;
    id: string;
}

interface IError {
    code: string;
}

interface IUserState {
    user: IUser;
    isLoading: Boolean;
    hasSignedUp: Boolean;
    message: string;
    error: IError;
}

const initialState: IUserState = {
    user: {
        displayName: '',
        email: '',
        id: ''
    },
    isLoading: false,
    hasSignedUp: false,
    message: '',
    error: {
        code: ''
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<IUser>) => {
            console.log(payload);
            state.user = payload;
        },
        resetError: (state) => {
            state.error = initialState.error;
        },
        checkUserSession: (state) => {
            state.isLoading = true;
        },
        setIsLoading: (state, { payload }: PayloadAction<Boolean>) => {
            state.isLoading = payload;
        },
        googleSignInStart: (state) => {
            state.isLoading = true;
        },
        emailSignInStart: (state) => {
            state.isLoading = true;
        },
        signInSuccess: (state, { payload }: PayloadAction<IUser>) => {
            console.log(payload);
            state.user = payload;
            state.isLoading = false;
            state.message = 'Signed in!';
            sessionStorage.setItem('veshh_user', JSON.stringify(payload));
        },
        signInFailure: (state, { payload }: PayloadAction<IError>) => {
            // console.error("Sign in error", payload);
            state.error = payload;
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
        signOutFailure: (state, { payload }: PayloadAction<IError>) => {
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
        signUpFailure: (state, { payload }: PayloadAction<IError>) => {
            console.error("Sign up error", payload);
            state.error = payload;
            state.isLoading = false;
        },
    },
});

export const { setUser, setIsLoading, checkUserSession, googleSignInStart, emailSignInStart, signInSuccess, signInFailure, signOutStart, signOutSuccess, signOutFailure, signUpStart, signUpSuccess, signUpFailure, resetError } = userSlice.actions

export default userSlice.reducer;
