import { createSlice } from '@reduxjs/toolkit';

import { CountriesSchema } from '../types/countries';
import { fetchCountriesData } from '../services/fetchCountriesData/fetchCountriesData';

export const initialState: CountriesSchema = {
    data: [],
    isLoading: false,
    error: ''
};

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        clear: () => initialState
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCountriesData.pending, state => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchCountriesData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCountriesData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: countriesActions } = countriesSlice;
export const { reducer: countriesReducer } = countriesSlice;
