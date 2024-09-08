import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';

import { User, userActions } from 'entities/user';

import { RoutePath } from 'shared/config';
import { IValidationErrors, getErrorMessage } from 'shared/lib';

import { LoginData } from '../../types/loginSchema';
import { getLoginFormData } from '../../selectors';
import { validateLoginForm } from '../validateLoginForm/validateLoginForm';

export const loginByUsername = createAsyncThunk<
    User,
    void,
    ThunkConfig<{ error?: string; validationErrors?: IValidationErrors }>
>('login/loginByUsername', async (_, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const data: LoginData = getLoginFormData(getState());

    const validationErrors = validateLoginForm(data);

    if (Object.keys(validationErrors).length) {
        return rejectWithValue({ validationErrors });
    }

    let response = null;

    try {
        response = await extra.api.post<User>('/login', data);

        if (!response.data) {
            return rejectWithValue({ error: 'Пришли пустые данные пользователя!' });
        }
    } catch (error: unknown) {
        const err = error as AxiosError<Error>;

        return rejectWithValue({ error: getErrorMessage(err) });
    }

    dispatch(userActions.setAuthData(data));

    if (extra.navigate) {
        extra.navigate(RoutePath.profile);
    }

    return response.data;
});
