import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';

import { Profile, profileActions } from 'entities/profile';

import { RoutePath } from 'shared/config';
import { IValidationErrors, getErrorMessage } from 'shared/lib';

import { LoginData } from '../../types/loginSchema';
import { getLoginFormData } from '../../selectors';
import { validateLoginForm } from '../validateLoginForm/validateLoginForm';
import { ProfileAuthDataSchema } from 'entities/profile/model/types/profile';

interface ICallbacks {
    success?: () => void;
}

export const loginByUsername = createAsyncThunk<
    Profile,
    ICallbacks,
    ThunkConfig<{ error?: string; validationErrors?: IValidationErrors }>
>('login/loginByUsername', async (callbacks, thunkApi) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkApi;

    const data: LoginData = getLoginFormData(getState()) || {};

    const validationErrors = validateLoginForm(data);

    if (Object.keys(validationErrors).length) {
        return rejectWithValue({ validationErrors });
    }

    let response = null;

    try {
        response = await extra.api.post<ProfileAuthDataSchema>('/auth/login', data);

        if (!response.data) {
            return rejectWithValue({ error: 'Пришли пустые данные пользователя!' });
        }
    } catch (error: unknown) {
        const err = error as AxiosError<Error>;

        return rejectWithValue({ error: getErrorMessage(err) });
    }

    dispatch(profileActions.setAuthData(response.data));

    if (extra.navigate) {
        extra.navigate(RoutePath.main);
    }

    if (callbacks.success) {
        callbacks.success();
    }

    return response.data;
});
