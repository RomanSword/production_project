import { ChangeEvent, InputHTMLAttributes, ReactElement, memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';

import { Button } from '../button/button';

import cls from './uploadFileButton.module.scss';

interface UploadFileButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    uploadFile: (src: File) => void;
    className?: string;
}

export const UploadFileButton = memo((props: UploadFileButtonProps): ReactElement => {
    const { id, uploadFile, className, accept = 'image/png, image/jpeg' } = props;

    const { t } = useTranslation();
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (target.files) {
            uploadFile(target.files[0]);
        }
    };

    const onClick = () => {
        inputRef?.current?.click();
    };

    return (
        <label
            htmlFor={id}
            className={classNames([cls.container, className])}
        >
            <input
                type='file'
                ref={inputRef}
                accept={accept}
                className={cls.fileInput}
                onChange={onChange}
            />

            <Button
                data-testid='login-submit-button'
                onClick={onClick}
            >
                {t('upload')}
            </Button>
        </label>
    );
});
