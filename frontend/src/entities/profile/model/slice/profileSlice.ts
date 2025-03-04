import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CountryData } from 'entities/countries';
import { CityData } from 'entities/city';

import { PROFILE_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

import { ProfileAuthDataSchema, ProfileSchema } from '../types/profile';
import { fetchProfileDataById } from '../services/fetchProfileDataById/fetchProfileDataById';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

export const initialState: ProfileSchema = {
    readonly: true,
    isEdited: false,
    isLoading: false,
    formData: {},
    data: {},
    authData: { id: '', firstname: '' },
    error: '',
    validationErrors: {},
    isInited: false
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

            if (state.validationErrors?.[key]) {
                delete state.validationErrors?.[key];

                state.validationErrors = { ...state.validationErrors };
            }

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
        clear: () => initialState,
        setAuthData: (state, action: PayloadAction<ProfileAuthDataSchema>) => {
            localStorage.setItem(PROFILE_LOCAL_STORAGE_KEY, JSON.stringify(action.payload));

            state.authData = action.payload;
        },
        initAuthData: state => {
            const authData = localStorage.getItem(PROFILE_LOCAL_STORAGE_KEY);

            if (authData) {
                state.authData = JSON.parse(authData);
            }

            state.isInited = true;
        },
        clearAuthData: state => {
            localStorage.removeItem(PROFILE_LOCAL_STORAGE_KEY);

            state.data = {};
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileDataById.pending, state => {
                state.error = '';
                state.readonly = true;
                state.isEdited = false;
                state.isLoading = true;
                state.formData = { ...state.data };
            })
            .addCase(fetchProfileDataById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(fetchProfileDataById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(updateProfileData.pending, state => {
                state.error = '';
                state.validationErrors = {};
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
                state.readonly = true;
                state.isEdited = false;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.error;
                state.validationErrors = action.payload?.validationErrors;
            });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
