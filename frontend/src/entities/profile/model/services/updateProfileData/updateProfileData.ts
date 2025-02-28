import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';
import { AppRoutes, RoutePath } from 'shared/config';
import { ErrorCodes } from 'shared/const/common';
import { IValidationErrors, getErrorMessage } from 'shared/lib';

import { Profile } from '../../types/profile';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<{ error?: string; validationErrors?: IValidationErrors }>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const data: Profile = getProfileFormData(getState());

    const validationErrors = validateProfileData(data);

    if (Object.keys(validationErrors).length) {
        return rejectWithValue({ validationErrors });
    }

    try {
        const response = await extra.api.put<{ profile: Profile }>(`/profiles/${data.id}`, {
            profile: data
        });

        if (!response.data) {
            return rejectWithValue({ error: 'Пришли пустые данные профиля!' });
        }

        return response.data.profile;
    } catch (error: unknown) {
        const err = error as AxiosError<Error>;

        if (err?.response?.status === ErrorCodes.forbidden && extra.navigate) {
            extra.navigate(RoutePath[AppRoutes.ACCESS_DEINED]);
        }

        return rejectWithValue({ error: getErrorMessage(err) });
    }
});
