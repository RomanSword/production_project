import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { CommentFormModalButton } from 'features/commentForm';

import { RoutePath } from 'shared/config';
import { classNames } from 'shared/lib';
import { AppLink, Button, ButtonTheme, ImageBlock, ImageBlockSize, TextBlock } from 'shared/ui';

import { CommentEntity } from '../../model/types/commentEntity';

import cls from './commentItem.module.scss';

interface CommentItemProps {
    item: CommentEntity;
    currentId?: string;
    onOpenForm?: (id: string, text: string) => void;
    onSubmit?: () => void;
    onDelete?: (id: string) => void;
    className?: string;
}

export const CommentItem = (props: CommentItemProps): ReactElement => {
    const { item, currentId, onOpenForm, onSubmit, onDelete, className } = props;

    const isYou = currentId === item.profile.id;

    const { t } = useTranslation();
    const { t: tForm } = useTranslation('form');

    return (
        <div className={classNames([cls.container, className])}>
            <div className={cls.header}>
                <div className={cls.info}>
                    <ImageBlock
                        size={ImageBlockSize.SMALL}
                        src={item.profile.avatar_src}
                        readonly={true}
                        withBorder={true}
                    />

                    <AppLink
                        to={`${RoutePath.profile}${item.profile.id}`}
                        className={cls.name}
                    >
                        {item.profile.firstname} {item.profile.lastname}
                    </AppLink>

                    {isYou && (
                        <TextBlock
                            text={`(${t('its_you')})`}
                            className={cls.label}
                        />
                    )}
                </div>

                {isYou && onOpenForm && onSubmit && onDelete && (
                    <div className={cls.actions}>
                        <CommentFormModalButton
                            buttonText={tForm('edit')}
                            modalName={`editCommentForm_${item.id}`}
                            onOpen={() => onOpenForm(item.id, item.text)}
                            onSubmit={onSubmit}
                        />

                        <Button
                            data-testid='commentForm-delete-button'
                            onClick={() => onDelete(item.id)}
                            theme={ButtonTheme.OUTLINE_DANGER}
                        >
                            {tForm('delete')}
                        </Button>
                    </div>
                )}
            </div>

            <TextBlock
                text={item.text}
                className={cls.text}
            />
        </div>
    );
};
