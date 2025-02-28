import { Fragment, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileAuthData } from 'entities/profile';

import { CommentFormModalButton } from 'features/commentForm';

import { classNames } from 'shared/lib';
import { LoadingWrapper, TextBlock, TextBlockType } from 'shared/ui';

import { CommentEntity } from '../../model/types/commentEntity';
import { CommentItem } from '../commentItem/commentItem';
import { CommentListSkeleton } from './commentListSkeleton';

import cls from './commentList.module.scss';

interface CommentListProps {
    items: CommentEntity[];
    onInitCommentForm: (id: string, text: string) => void;
    onSubmitComment?: () => void;
    onDeleteComment?: (id: string) => void;
    error?: string;
    isLoading?: boolean;
    onReload?: () => void;
    className?: string;
}

export const CommentList = (props: CommentListProps): ReactElement => {
    const {
        items,
        onInitCommentForm,
        onSubmitComment,
        onDeleteComment,
        error,
        isLoading = false,
        onReload,
        className
    } = props;

    const { t } = useTranslation();
    const { t: tForm } = useTranslation('form');

    const profileAuthData = useSelector(getProfileAuthData);

    return (
        <LoadingWrapper
            error={error}
            isLoading={isLoading}
            className={classNames([cls.commentList, className])}
            renderSkeleton={CommentListSkeleton}
            onReload={onReload}
        >
            <div className={cls.header}>
                <TextBlock
                    type={TextBlockType.TITLE_ARTICLE}
                    text={t('comments')}
                />

                {profileAuthData?.id !== '' && !!onSubmitComment && (
                    <CommentFormModalButton
                        buttonText={tForm('add')}
                        modalName='createCommentForm'
                        onSubmit={onSubmitComment}
                    />
                )}
            </div>

            {items &&
                items.map(item => {
                    return (
                        <Fragment key={item.id}>
                            <CommentItem
                                item={item}
                                currentId={profileAuthData?.id}
                                onOpenForm={() => onInitCommentForm(item.id, item.text)}
                                onSubmit={onSubmitComment}
                                onDelete={onDeleteComment}
                            />
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
