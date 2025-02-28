import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/storeProvider';

import { CommentEntity } from 'entities/comment';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<CommentEntity, string>({
    selectId: (item: CommentEntity) => item.id
});

export const getArticleComments = commentsAdapter.getSelectors(
    (state: StateSchema) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const initialState: ArticleDetailsCommentsSchema = {
    isLoading: false,
    error: '',
    ids: [],
    entities: {}
};

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState(initialState),
    reducers: {
        clear: () => initialState
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCommentsByArticleId.pending, state => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;

                // Здесь происходит нормализация полученных данных
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || '';
            });
    }
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
