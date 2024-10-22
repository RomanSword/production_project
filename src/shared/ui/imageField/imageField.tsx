import { ReactElement, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { UploadFileButton } from 'entities/file';

import { ImageBlock, ImageBlockSize } from '../imageBlock/imageBlock';
import { Spinner } from '../spinner/spinner';

import cls from './imageField.module.scss';

interface ImageFieldProps {
    alt: string;
    changeSrc: (src: string) => void;
    clearSrc: () => void;
    label: string;
    src?: string;
    touched?: boolean;
    readonly?: boolean;
    error?: string;
    isLoadingSrc?: boolean;
    withLoadingImage?: boolean;
    className?: string;
}

export const ImageField = memo(function ImageField(props: ImageFieldProps): ReactElement {
    const {
        src,
        alt,
        changeSrc,
        clearSrc,
        label,
        error = '',
        touched = false,
        readonly = false,
        isLoadingSrc = false,
        withLoadingImage = true,
        className
    } = props;

    const { t } = useTranslation();

    let content = null;

    if (isLoadingSrc) {
        content = (
            <div className={cls.spinnerWrapper}>
                <Spinner />
            </div>
        );
    } else if (src) {
        content = (
            <ImageBlock
                size={ImageBlockSize.LARGE}
                src={src}
                alt={alt}
                withPreview={true}
                withLoadingImage={withLoadingImage}
                readonly={readonly}
                onDelete={clearSrc}
            />
        );
    } else {
        content = (
            <div className={cls.uploadFileWrapper}>
                {readonly ? (
                    <div className={cls.emptyImage}>
                        <span>{t('no_image')}</span>
                    </div>
                ) : (
                    <UploadFileButton
                        id='imageFieldUploadBtn'
                        onUploadSuccess={changeSrc}
                        onUploadError={() => {}}
                        onTryAgain={clearSrc}
                        readonly={readonly}
                        isErrorLabelShowed={false}
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
                data-readonly={readonly}
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
