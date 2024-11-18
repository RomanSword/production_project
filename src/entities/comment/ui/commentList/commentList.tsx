import { Fragment, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { LoadingWrapper, TextBlock, TextBlockType } from 'shared/ui';

import { CommentEntity } from '../../model/types/commentEntity';
import { CommentItem } from '../commentItem/commentItem';
import { CommentListSkeleton } from './commentListSkeleton';

import cls from './commentList.module.scss';

interface CommentListProps {
    items: CommentEntity[];
    error?: string;
    isLoading?: boolean;
    onReload?: () => void;
    className?: string;
}

export const CommentList = (props: CommentListProps): ReactElement => {
    const { items, error, isLoading = false, onReload, className } = props;

    const { t } = useTranslation();

    return (
        <LoadingWrapper
            error={error}
            isLoading={isLoading}
            className={classNames([cls.commentList, className])}
            renderSkeleton={CommentListSkeleton}
            onReload={onReload}
        >
            <TextBlock
                type={TextBlockType.TITLE_ARTICLE}
                text={t('comments')}
            />

            {items &&
                items.map(item => {
                    return (
                        <Fragment key={item.id}>
                            <CommentItem item={item} />
                        </Fragment>
                    );
                })}

            {!items.length && (
                <TextBlock
                    type={TextBlockType.TEXT}
                    text={t('empty_content')}
                />
            )}
        </LoadingWrapper>
    );
};
