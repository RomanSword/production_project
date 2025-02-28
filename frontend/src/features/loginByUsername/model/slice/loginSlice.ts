import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

export const initialState: LoginSchema = {
    formData: {},
    isLoading: false,
    error: '',
    validationErrors: {}
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setDataField: (state, action: PayloadAction<{ key: string; value: string }>) => {
            const { key, value } = action.payload;

            state.formData = {
                ...state.formData,
                [key]: value
            };

            if (state.validationErrors?.[key]) {
                delete state.validationErrors?.[key];

                state.validationErrors = { ...state.validationErrors };
            }

            state.error = '';
        },
        clear: () => initialState
    },
    extraReducers: builder => {
        builder
            .addCase(loginByUsername.pending, state => {
                state.error = '';
                state.validationErrors = {};
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, state => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.error;
                state.validationErrors = action.payload?.validationErrors;
            });
    }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
