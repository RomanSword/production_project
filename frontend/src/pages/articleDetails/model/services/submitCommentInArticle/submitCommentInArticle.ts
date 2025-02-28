import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/storeProvider';

import { getCommentFormId, getCommentFormText, validateCommentData } from 'features/commentForm';

import { AppRoutes, RoutePath } from 'shared/config';
import { ErrorCodes } from 'shared/const/common';
import { IValidationErrors, getErrorMessage } from 'shared/lib';

import { ArticleDetailsCommentForm } from '../../types/articleDetailsCommentsSchema';

interface IAttrs {
    articleId: string;
    success?: (commentId: string) => void;
}

export const submitCommentInArticle = createAsyncThunk<
    ArticleDetailsCommentForm,
    IAttrs,
    ThunkConfig<{ error?: string; validationErrors?: IValidationErrors }>
>('articleDetails/submitCommentInArticle', async (attrs, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const id = getCommentFormId(getState());
    const text = getCommentFormText(getState());

    const validationErrors = validateCommentData({ text });

    if (Object.keys(validationErrors).length) {
        return rejectWithValue({ validationErrors });
    }

    let response;

    try {
        if (id) {
            response = await extra.api.put<ArticleDetailsCommentForm>(`/comments/${id}`, {
                comment: {
                    article_id: attrs.articleId,
                    text
                }
            });
        } else {
            response = await extra.api.post<ArticleDetailsCommentForm>('/comments', {
                comment: {
                    article_id: attrs.articleId,
                    text
                }
            });
        }

        if (!response.data) {
            return rejectWithValue({ error: 'Пришли пустые данные комментария!' });
        }
    } catch (error: unknown) {
        const err = error as AxiosError<Error>;

        if (err?.response?.status === ErrorCodes.forbidden && extra.navigate) {
            extra.navigate(RoutePath[AppRoutes.ACCESS_DEINED]);
        }

        return rejectWithValue({ error: getErrorMessage(err) });
    }

    if (attrs.success) {
        attrs.success(id);
    }

    return response.data;
});
