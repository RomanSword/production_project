import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';
import { AppRoutes, RoutePath } from 'shared/config';
import { ErrorCodes } from 'shared/const/common';
import { getErrorMessage } from 'shared/lib';

import { Profile } from '../../types/profile';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const data: Profile = getProfileFormData(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', data);

            if (!response.data) {
                return rejectWithValue('Пришли пустые данные профиля!');
            }

            return response.data;
        } catch (error: unknown) {
            const err = error as AxiosError<Error>;

            if (err?.response?.status === ErrorCodes.forbidden && extra.navigate) {
                extra.navigate(RoutePath[AppRoutes.ACCESS_DEINED]);
            }

            return rejectWithValue(getErrorMessage(err));
        }
    }
);
