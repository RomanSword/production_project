import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';
import { getErrorMessage } from 'shared/lib';

import { CountryData } from '../../types/countries';

export const fetchCountriesData = createAsyncThunk<CountryData[], void, ThunkConfig<string>>(
    'countries/fetchCountriesData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<CountryData[]>('/countries');

            return response.data;
        } catch (error: unknown) {
            const err = error as AxiosError<Error>;

            return rejectWithValue(getErrorMessage(err));
        }
    }
);
