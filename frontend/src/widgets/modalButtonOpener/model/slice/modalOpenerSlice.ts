import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ModalSchema } from '../types/modalSchema';

export const initialState: ModalSchema = {
    openedModals: []
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        changeModalVisibility: (state, action: PayloadAction<string>) => {
            if (state.openedModals.includes(action.payload)) {
                state.openedModals = state.openedModals.filter(item => item !== action.payload);
            } else {
                state.openedModals = [...state.openedModals, action.payload];
            }
        }
    }
});

export const { actions: modalActions } = modalSlice;
export const { reducer: modalReducer } = modalSlice;
