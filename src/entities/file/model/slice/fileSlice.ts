import { createSlice } from '@reduxjs/toolkit';

import { FileSchema } from '../types/file';
import { uploadFile } from '../services/uploadFile/uploadFile';

export const initialState: FileSchema = {
    data: {},
    isLoading: false,
    error: ''
};

export const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        clear: () => initialState
    },
    extraReducers: builder => {
        builder
            .addCase(uploadFile.pending, state => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(uploadFile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = { src: action.payload.src };
            })
            .addCase(uploadFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: fileActions } = fileSlice;
export const { reducer: fileReducer } = fileSlice;
