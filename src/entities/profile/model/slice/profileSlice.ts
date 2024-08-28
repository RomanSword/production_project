import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CountryData } from 'entities/countries';
import { CityData } from 'entities/city';

import { ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

export const initialState: ProfileSchema = {
    readonly: true,
    isEdited: false,
    isLoading: false,
    formData: {},
    data: {}
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setFormDataField: (
            state,
            action: PayloadAction<{ key: string; value: string | number }>
        ) => {
            const { key, value } = action.payload;

            state.formData = {
                ...state.formData,
                [key]: value
            };

            state.isEdited = JSON.stringify(state.data) !== JSON.stringify(state.formData);
        },
        setFormDataCountry: (state, action: PayloadAction<{ value: CountryData }>) => {
            state.formData = {
                ...state.formData,
                city_id: undefined,
                city: undefined,
                country: action.payload.value,
                country_id: action.payload.value.id
            };
            state.isEdited = true;
        },
        setFormDataCity: (state, action: PayloadAction<{ value: CityData }>) => {
            state.formData = {
                ...state.formData,
                city: action.payload.value,
                city_id: action.payload.value.id
            };
            state.isEdited = true;
        },
        startEdit: state => {
            state.readonly = false;
        },
        cancelEdit: state => {
            state.formData = { ...state.data };
            state.readonly = true;
            state.isEdited = false;
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
            })
            .addCase(updateProfileData.pending, state => {
                state.error = '';
                state.isLoading = true;
                state.readonly = true;
                state.isEdited = false;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
