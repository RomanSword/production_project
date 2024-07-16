import { createSlice } from '@reduxjs/toolkit';

import { ProfileSchema } from '../types/profile';

export const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
