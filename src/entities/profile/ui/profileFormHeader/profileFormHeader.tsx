import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button, ButtonTheme, TextBlock, TextBlockType } from 'shared/ui';

import cls from './profileFormHeader.module.scss';

interface ProfileFormProps {
    readonly: boolean;
    isLoading?: boolean;
    isEdited?: boolean;
    startEdit: () => void;
    applyEdit: () => void;
    cancelEdit: () => void;
    className?: string;
}

export const ProfileFormHeader = (props: ProfileFormProps) => {
    const { readonly, isLoading, isEdited, startEdit, applyEdit, cancelEdit, className } = props;

    const { t } = useTranslation('profile');

    return (
        <div className={classNames([cls.container, className])}>
            <TextBlock
                type={TextBlockType.TITLE}
                text={t('title')}
            />

            <div className={cls.actions}>
                {readonly && (
                    <Button
                        data-testid='profile-edit-mode-button'
                        onClick={startEdit}
                        isLoading={isLoading}
                    >
                        {t('edit')}
                    </Button>
                )}

                {!readonly && (
                    <Button
                        data-testid='profile-apply-edit-button'
                        onClick={applyEdit}
                        isDisabled={!isEdited}
                    >
                        {t('save')}
                    </Button>
                )}

                {!readonly && (
                    <Button
                        data-testid='profile-cancel-edit-button'
                        theme={ButtonTheme.OUTLINE_DANGER}
                        onClick={cancelEdit}
                    >
                        {t('cancel')}
                    </Button>
                )}
            </div>
        </div>
    );
};
