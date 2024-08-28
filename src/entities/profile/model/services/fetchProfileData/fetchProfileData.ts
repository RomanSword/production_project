import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';
import { AppRoutes, RoutePath } from 'shared/config';
import { ErrorCodes } from 'shared/const/common';
import { getErrorMessage } from 'shared/lib';

import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        let data: Profile = {};

        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                return rejectWithValue('Пришли пустые данные профиля!');
            }

            data = response.data;
        } catch (error: unknown) {
            const err = error as AxiosError<Error>;

            if (err?.response?.status === ErrorCodes.forbidden && extra.navigate) {
                extra.navigate(RoutePath[AppRoutes.ACCESS_DEINED]);
            }

            return rejectWithValue(getErrorMessage(err));
        }

        return data;
    }
);
