import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from 'entities/user';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
    let data: User = {};

    try {
        const response = await axios.post('http://localhost:8000/login', authData);

        if (!response.data) {
            throw new Error();
        }

        data = response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response ? error.response.data.message : error.code);
    }

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data));
    thunkAPI.dispatch(userActions.setAuthData(data));

    return data;
});
