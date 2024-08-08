import { ReactElement, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import CloseIcon from 'shared/assets/icons/close.svg';

import { Button } from '../button/button';
import { ImageBlock, ImageBlockSize } from '../imageBlock/imageBlock';
import { Spinner } from '../spinner/spinner';
import { UploadFileButton } from '../uploadFileButton/uploadFileButton';

import cls from './imageField.module.scss';

interface ImageFieldProps {
    alt: string;
    changeSrc: (src: string) => void;
    label: string;
    src?: string;
    touched?: boolean;
    readOnly?: boolean;
    error?: string;
    isLoadingSrc?: boolean;
    className?: string;
}

export const ImageField = memo((props: ImageFieldProps): ReactElement => {
    const {
        src,
        alt,
        changeSrc,
        label,
        error = '',
        touched = false,
        readOnly = false,
        isLoadingSrc = false,
        className
    } = props;

    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);

    const uploadFile = useCallback(
        (src: File) => {
            setIsLoading(true);
            console.log(src);

            setTimeout(() => {
                changeSrc(
                    'https://sun9-59.userapi.com/impg/c858328/v858328798/11eeb0/BNHjrf745g4.jpg?size=1392x1391&quality=96&sign=cb94534054e9602119a40e2de278b153&type=album'
                );
                setIsLoading(false);
            }, 3000);
        },
        [changeSrc]
    );

    const clearFile = useCallback(() => {
        setIsLoading(true);
        changeSrc('');

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [changeSrc]);

    let content = null;

    if (isLoadingSrc || isLoading) {
        content = (
            <div className={cls.spinnerWrapper}>
                <Spinner />
            </div>
        );
    } else if (src) {
        content = (
            <div className={cls.imageContainer}>
                <ImageBlock
                    size={ImageBlockSize.LARGE}
                    src={src}
                    alt={alt}
                />

                {!readOnly && (
                    <Button
                        data-testid='delete-image-button'
                        onClick={clearFile}
                        className={cls.deleteButton}
                    >
                        <CloseIcon />
                    </Button>
                )}
            </div>
        );
    } else {
        content = (
            <div className={cls.uploadFileWrapper}>
                {readOnly ? (
                    <div className={cls.emptyAvatar}>
                        <span>{t('no_avatar')}</span>
                    </div>
                ) : (
                    <UploadFileButton
                        id='imageFieldUploadBtn'
                        uploadFile={uploadFile}
                        readOnly={readOnly}
                    />
                )}
            </div>
        );
    }

    const isErrorExist = touched && !!error;

    return (
        <div className={classNames([cls.container, className])}>
            <div
                className={cls.innerContainer}
                data-error={isErrorExist}
            >
                <span
                    className={cls.label}
                    data-error={isErrorExist}
                >
                    {label}
                </span>

                {content}
            </div>

            <div className={cls.error}>{isErrorExist ? error : ''}</div>
        </div>
    );
});
