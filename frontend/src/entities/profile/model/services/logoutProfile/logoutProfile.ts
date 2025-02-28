import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';

export const logoutProfile = createAsyncThunk<void, void, ThunkConfig<void>>(
    'profile/logoutProfile',
    async (_, thunkApi) => {
        const { extra } = thunkApi;

        try {
            await extra.api.delete('/auth/logout');
        } catch (error: unknown) {
            return;
        }

        return;
    }
);
