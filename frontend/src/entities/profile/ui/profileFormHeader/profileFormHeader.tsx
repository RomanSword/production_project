import { useTranslation } from 'react-i18next';

import { IValidationErrors, classNames } from 'shared/lib';
import { Button, ButtonTheme, TextBlock, TextBlockType } from 'shared/ui';

import cls from './profileFormHeader.module.scss';

interface ProfileFormProps {
    readonly: boolean;
    errors: IValidationErrors;
    isLoading?: boolean;
    isEdited?: boolean;
    startEdit: () => void;
    applyEdit: () => void;
    cancelEdit: () => void;
    className?: string;
}

export const ProfileFormHeader = (props: ProfileFormProps) => {
    const { readonly, errors, isLoading, isEdited, startEdit, applyEdit, cancelEdit, className } =
        props;

    const { t: tProfile } = useTranslation('profile');
    const { t: tForm } = useTranslation('form');

    const isSaveButtonDisabled = Object.keys(errors).length > 0 || !isEdited;

    return (
        <div className={classNames([cls.container, className])}>
            <TextBlock
                type={TextBlockType.TITLE_MAIN}
                text={tProfile('title')}
            />

            <div className={cls.actions}>
                {readonly && (
                    <Button
                        data-testid='profile-edit-mode-button'
                        onClick={startEdit}
                        isLoading={isLoading}
                    >
                        {tForm('edit')}
                    </Button>
                )}

                {!readonly && (
                    <Button
                        data-testid='profile-apply-edit-button'
                        onClick={applyEdit}
                        isDisabled={isSaveButtonDisabled}
                    >
                        {tForm('save')}
                    </Button>
                )}

                {!readonly && (
                    <Button
                        data-testid='profile-cancel-edit-button'
                        theme={ButtonTheme.OUTLINE_DANGER}
                        onClick={cancelEdit}
                    >
                        {tForm('cancel')}
                    </Button>
                )}
            </div>
        </div>
    );
};
