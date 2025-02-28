import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';
import { AppRoutes, RoutePath } from 'shared/config';
import { ErrorCodes } from 'shared/const/common';
import { getErrorMessage } from 'shared/lib';

import { Profile } from '../../types/profile';

export const fetchProfileDataById = createAsyncThunk<
    Profile,
    string | undefined,
    ThunkConfig<string>
>('profile/fetchProfileDataById', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) {
        return rejectWithValue('Отсутствует id профиля!');
    }

    let data: Profile = {};

    try {
        const response = await extra.api.get<{ profile: Profile }>('/profiles/' + articleId);

        if (!response.data) {
            return rejectWithValue('Пришли пустые данные профиля!');
        }

        data = response.data.profile;
    } catch (error: unknown) {
        const err = error as AxiosError<Error>;

        if (err?.response?.status === ErrorCodes.forbidden && extra.navigate) {
            extra.navigate(RoutePath[AppRoutes.ACCESS_DEINED]);
        }

        return rejectWithValue(getErrorMessage(err));
    }

    return data;
});
