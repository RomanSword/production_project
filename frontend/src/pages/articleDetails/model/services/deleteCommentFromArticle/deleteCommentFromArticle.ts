import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';

import { AppRoutes, RoutePath } from 'shared/config';
import { ErrorCodes } from 'shared/const/common';
import { IValidationErrors, getErrorMessage } from 'shared/lib';

import { ArticleDetailsCommentForm } from '../../types/articleDetailsCommentsSchema';

interface IAttrs {
    commentId: string;
    success?: () => void;
}

export const deleteCommentFromArticle = createAsyncThunk<
    void,
    IAttrs,
    ThunkConfig<{ error?: string; validationErrors?: IValidationErrors }>
>('articleDetails/deleteCommentFromArticle', async (attrs, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        await extra.api.delete<ArticleDetailsCommentForm>(`/comments/${attrs.commentId}`);
    } catch (error: unknown) {
        const err = error as AxiosError<Error>;

        if (err?.response?.status === ErrorCodes.forbidden && extra.navigate) {
            extra.navigate(RoutePath[AppRoutes.ACCESS_DEINED]);
        }

        return rejectWithValue({ error: getErrorMessage(err) });
    }

    if (attrs.success) {
        attrs.success();
    }
});
