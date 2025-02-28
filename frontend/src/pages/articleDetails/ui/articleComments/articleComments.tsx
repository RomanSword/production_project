import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { CommentList } from 'entities/comment';

import { commentFormActions, commentFormReducer } from 'features/commentForm';

import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';

import { articleDetailsCommentsReducer } from 'pages/articleDetails';
import { modalActions } from 'widgets/modalButtonOpener';

import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading
} from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { submitCommentInArticle } from '../../model/services/submitCommentInArticle/submitCommentInArticle';
import { deleteCommentFromArticle } from '../../model/services/deleteCommentFromArticle/deleteCommentFromArticle';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

import cls from './articleComments.module.scss';

interface ArticleDetailsProps {
    articleId: string;
    className?: string;
}

const initialReducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    commentForm: commentFormReducer
};

export const ArticleComments = memo(function ArticleComments(props: ArticleDetailsProps) {
    const { articleId, className } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();

    const { t } = useTranslation();

    const data = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const error = useSelector(getArticleDetailsCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    const reloadData = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(articleId));
        }
    }, [dispatch, articleId]);

    const onSubmitComment = useCallback(() => {
        dispatch(
            submitCommentInArticle({
                articleId,
                success: (commentId: string) => {
                    reloadData();
                    dispatch(
                        modalActions.changeModalVisibility(
                            commentId ? `editCommentForm_${commentId}` : 'createCommentForm'
                        )
                    );
                }
            })
        );
    }, [articleId, dispatch, reloadData]);

    const onInitCommentForm = useCallback(
        (id: string, text: string) => {
            dispatch(commentFormActions.setId(id));
            dispatch(commentFormActions.setText(text));
        },
        [dispatch]
    );

    const onDeleteComment = useCallback(
        (commentId: string) => {
            if (confirm(t('you_sure'))) {
                dispatch(deleteCommentFromArticle({ commentId, success: reloadData }));
            }
        },
        [dispatch, t, reloadData]
    );

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <CommentList
                onInitCommentForm={onInitCommentForm}
                onSubmitComment={onSubmitComment}
                onDeleteComment={onDeleteComment}
                error={error}
                isLoading={isLoading}
                onReload={reloadData}
                items={data}
                className={classNames([cls.container, className])}
            />
        </DynamicModuleLoader>
    );
});
