import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CommentFormSchema } from '../types/commentFormSchema';

export const initialState: CommentFormSchema = {
    id: '',
    text: '',
    error: '',
    isLoading: false
};

export const commentFormSlice = createSlice({
    name: 'commentForm',
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        clear: () => initialState
    }
});

export const { actions: commentFormActions } = commentFormSlice;
export const { reducer: commentFormReducer } = commentFormSlice;
