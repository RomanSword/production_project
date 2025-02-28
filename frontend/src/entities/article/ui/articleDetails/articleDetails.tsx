import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { LoadingWrapper } from 'shared/ui';

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

import { ArticleHeader } from '../articleHeader/articleHeader';
import { ArticleBlockItem } from '../articleBlockItem/articleBlockItem';
import { ArticleDetailsSkeleton } from './articleDetailsSkeleton';

import cls from './articleDetails.module.scss';

interface ArticleDetailsProps {
    id: string;
    className?: string;
}

const initialReducers: ReducerList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo(function ArticleDetails(props: ArticleDetailsProps) {
    const { className, id } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();

    const data = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const reloadFormData = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <LoadingWrapper
                error={error}
                isLoading={isLoading}
                onReload={reloadFormData}
                className={classNames([cls.container, className])}
                renderSkeleton={ArticleDetailsSkeleton}
            >
                <ArticleHeader
                    avatarSrc={data?.cover_src}
                    title={data?.title}
                    views={data?.views}
                    createdAt={data?.created_at}
                    className={cls.header}
                />

                <div className={cls.content}>{data?.blocks?.map(ArticleBlockItem)}</div>
            </LoadingWrapper>
        </DynamicModuleLoader>
    );
});
