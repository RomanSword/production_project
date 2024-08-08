import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData';

export const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    formData: {},
    data: {}
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setDataAge: (state, action: PayloadAction<number>) => {
            state.formData.age = action.payload;
        },
        setDataAvatar: (state, action: PayloadAction<string>) => {
            state.formData.avatar = {
                src: action.payload
            };
        },
        setDataCity: (state, action: PayloadAction<string>) => {
            state.formData.city = action.payload;
        },
        setDataCountry: (state, action: PayloadAction<string>) => {
            state.formData.country = action.payload;
        },
        setDataFirstname: (state, action: PayloadAction<string>) => {
            state.formData.firstname = action.payload;
        },
        setDataLastname: (state, action: PayloadAction<string>) => {
            state.formData.lastname = action.payload;
        },
        setDataUsername: (state, action: PayloadAction<string>) => {
            state.formData.username = action.payload;
        },
        resetFormData: state => {
            state.formData = { ...state.data };
        },
        applyFormData: state => {
            state.data = { ...state.formData };
        },
        clear: () => initialState
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, state => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
