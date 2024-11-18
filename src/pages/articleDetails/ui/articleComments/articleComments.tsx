import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { CommentList } from 'entities/comment';

import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';

import { articleDetailsCommentsReducer } from 'pages/articleDetails';

import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading
} from '../../model/selectors/comments';

import cls from './articleComments.module.scss';
import { getArticleComments } from 'pages/articleDetails/model/slices/articleDetailsCommentsSlice';

interface ArticleDetailsProps {
    articleId: string;
    className?: string;
}

const initialReducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer
};

export const ArticleComments = memo(function ArticleComments(props: ArticleDetailsProps) {
    const { articleId, className } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();

    const data = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const error = useSelector(getArticleDetailsCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    const reloadFormData = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(articleId));
        }
    }, [dispatch, articleId]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <CommentList
                error={error}
                isLoading={isLoading}
                onReload={reloadFormData}
                items={data}
                className={classNames([cls.container, className])}
            />
        </DynamicModuleLoader>
    );
});
