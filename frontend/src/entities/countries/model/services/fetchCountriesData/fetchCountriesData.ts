import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';
import { getErrorMessage } from 'shared/lib';

import { CountryData } from '../../types/countries';

export const fetchCountriesData = createAsyncThunk<CountryData[], void, ThunkConfig<string>>(
    'countries/fetchCountriesData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        let response = null;

        try {
            response = await extra.api.get<{ countries: CountryData[] }>('/countries');

            if (!response.data) {
                return rejectWithValue('Пришли пустые данные стран!');
            }
        } catch (error: unknown) {
            const err = error as AxiosError<Error>;

            return rejectWithValue(getErrorMessage(err));
        }

        return response.data.countries;
    }
);
