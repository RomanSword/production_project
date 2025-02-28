import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';
import { AppRoutes, RoutePath } from 'shared/config';
import { ErrorCodes } from 'shared/const/common';
import { getErrorMessage } from 'shared/lib';

import { FileData } from '../../types/file';

export const uploadFile = createAsyncThunk<FileData, File, ThunkConfig<string>>(
    'file/uploadFile',
    async (file, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await extra.api.post<FileData>('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data;' }
            });

            if (!response.data) {
                return rejectWithValue('Пришли пустые данные файла!');
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
