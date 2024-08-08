import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';

import { User, userActions } from 'entities/user';

import { RoutePath } from 'shared/config';
import { getErrorMessage } from 'shared/lib';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        let data: User = {};

        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                return rejectWithValue('Пришли пустые данные пользователя!');
            }

            data = response.data;
        } catch (error: unknown) {
            return rejectWithValue(getErrorMessage(error as AxiosError<Error>));
        }

        dispatch(userActions.setAuthData(data));

        if (extra.navigate) {
            extra.navigate(RoutePath.profile);
        }

        return data;
    }
);
