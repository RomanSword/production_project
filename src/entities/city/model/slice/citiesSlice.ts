import { createSlice } from '@reduxjs/toolkit';

import { CitiesSchema } from '../types/cities';
import { fetchCitiesData } from '../services/fetchCitiesData/fetchCitiesData';

export const initialState: CitiesSchema = {
    data: [],
    isLoading: false,
    error: ''
};

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        clear: () => initialState
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCitiesData.pending, state => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchCitiesData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCitiesData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: citiesActions } = citiesSlice;
export const { reducer: citiesReducer } = citiesSlice;
