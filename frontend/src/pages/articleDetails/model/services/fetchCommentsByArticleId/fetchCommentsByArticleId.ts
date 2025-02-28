import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';
import { AppRoutes, RoutePath } from 'shared/config';
import { ErrorCodes } from 'shared/const/common';
import { getErrorMessage } from 'shared/lib';

import { CommentEntity } from 'entities/comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    CommentEntity[],
    string,
    ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    let data: CommentEntity[] = [];

    try {
        const response = await extra.api.get<{ comments: CommentEntity[] }>('/comments', {
            params: {
                article_id: articleId
            }
        });

        if (!response.data) {
            return rejectWithValue('Пришли пустые данные комментариев!');
        }

        data = response.data.comments;
    } catch (error: unknown) {
        const err = error as AxiosError<Error>;

        if (err?.response?.status === ErrorCodes.forbidden && extra.navigate) {
            extra.navigate(RoutePath[AppRoutes.ACCESS_DEINED]);
        }

        return rejectWithValue(getErrorMessage(err));
    }

    return data;
});
