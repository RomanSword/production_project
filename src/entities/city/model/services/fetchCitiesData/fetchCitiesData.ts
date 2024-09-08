import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';
import { getErrorMessage } from 'shared/lib';

import { CityData } from '../../types/cities';

interface FetchCitiesDataProps {
    country_id: string;
}

export const fetchCitiesData = createAsyncThunk<
    CityData[],
    FetchCitiesDataProps,
    ThunkConfig<string>
>('cities/fetchCitiesData', async (params, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    let response = null;

    try {
        response = await extra.api.get<CityData[]>('/cities', {
            params: {
                country_id: params.country_id
            }
        });

        if (!response.data) {
            return rejectWithValue('Пришли пустые данные городов!');
        }
    } catch (error: unknown) {
        const err = error as AxiosError<Error>;

        return rejectWithValue(getErrorMessage(err));
    }

    return response.data;
});
