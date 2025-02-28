import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';
import { AppRoutes, RoutePath } from 'shared/config';
import { ErrorCodes } from 'shared/const/common';
import { getErrorMessage } from 'shared/lib';

import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        let data: Article = {};

        try {
            const response = await extra.api.get<{ article: Article }>(`/articles/${articleId}`);

            if (!response.data) {
                return rejectWithValue('Пришли пустые данные статьи!');
            }

            data = response.data.article;
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
