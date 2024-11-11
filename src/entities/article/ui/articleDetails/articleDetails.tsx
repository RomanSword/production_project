import { Fragment, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import {
    ImageBlock,
    ImageBlockSize,
    LoadingWrapper,
    TextBlock,
    TextBlockAlign,
    TextBlockType
} from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleBlockCode } from '../articleBlockCode/articleBlockCode';
import { ArticleBlockImage } from '../articleBlockImage/articleBlockImage';
import { ArticleBlockText } from '../articleBlockText/articleBlockText';

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

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

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
                <div className={cls.header}>
                    <ImageBlock
                        src={data?.avatarSrc}
                        size={ImageBlockSize.FULL_WIDTH}
                        readonly={true}
                        alt='article_avatar'
                        className={cls.headerAvatar}
                    />

                    <TextBlock
                        align={TextBlockAlign.CENTER}
                        type={TextBlockType.TITLE_MAIN}
                        text={data?.title}
                    />

                    {(data?.views || data?.createdAt) && (
                        <div className={cls.info}>
                            {data.views && (
                                <div className={cls.infoItem}>
                                    <EyeIcon />

                                    <TextBlock text={String(data.views)} />
                                </div>
                            )}
                            {data.createdAt && (
                                <div className={cls.infoItem}>
                                    <CalendarIcon />

                                    <TextBlock text={String(data.createdAt)} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className={cls.content}>
                    {data?.blocks?.map((item: ArticleBlock) => {
                        let content = <></>;

                        if (item.type === ArticleBlockType.CODE) {
                            content = <ArticleBlockCode text={item.code} />;
                        } else if (item.type === ArticleBlockType.IMAGE) {
                            content = (
                                <ArticleBlockImage
                                    src={item.src}
                                    title={item.title}
                                />
                            );
                        } else if (item.type === ArticleBlockType.TEXT) {
                            content = (
                                <ArticleBlockText
                                    title={item.title}
                                    paragraphs={item.paragraphs}
                                />
                            );
                        }

                        return <Fragment key={item.id}>{content}</Fragment>;
                    })}
                </div>
            </LoadingWrapper>
        </DynamicModuleLoader>
    );
});
