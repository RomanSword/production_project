import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

import { User, UserSchema } from '../types/user';

export const initialState: UserSchema = {
    authData: {}
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(action.payload));

            state.authData = action.payload;
        },
        initAuthData: state => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        clear: state => {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
            state.authData = {};
        }
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
