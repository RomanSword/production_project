import { ChangeEvent, InputHTMLAttributes, ReactElement, memo, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, Spinner, TextBlock, TextBlockType } from 'shared/ui';

import { uploadFile } from '../../model/services/uploadFile/uploadFile';
import { getFileIsLoading } from '../../model/selectors/getFileIsLoading/getFileIsLoading';
import { getFileError } from '../../model/selectors/getFileError/getFileError';
import { fileActions } from '../../model/slice/fileSlice';

import cls from './uploadFileButton.module.scss';

interface UploadFileButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    onUploadSuccess: (src: string) => void;
    onUploadError: (msg: string) => void;
    onTryAgain: () => void;
    readonly?: boolean;
    isErrorLabelShowed?: boolean;
    className?: string;
}

export const UploadFileButton = memo(function UploadFileButton(
    props: UploadFileButtonProps
): ReactElement {
    const {
        id,
        onUploadSuccess,
        onUploadError,
        onTryAgain,
        readonly = false,
        isErrorLabelShowed = true,
        className,
        accept = 'image/png, image/jpeg'
    } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();

    useEffect(() => {
        return () => dispatch(fileActions.clear());
    }, [dispatch]);

    const error = useSelector(getFileError);
    const isLoading = useSelector(getFileIsLoading);

    const { t } = useTranslation('form');
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (target.files) {
            const response = await dispatch(uploadFile(target.files[0]));

            if (response.error) {
                onUploadError(response.payload);
            }

            onUploadSuccess(response.payload.src);
        }
    };

    const onUploadClick = () => {
        inputRef?.current?.click();
    };

    const onTryAgainClick = () => {
        dispatch(fileActions.clear());
        onTryAgain();
    };

    if (isLoading) {
        return (
            <div className={cls.spinnerWrapper}>
                <Spinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cls.errorWrapper}>
                {isErrorLabelShowed && (
                    <TextBlock
                        type={TextBlockType.ERROR}
                        text={t('error_while_loading')}
                    />
                )}

                <Button
                    data-testid={`${id}-upload-try-again-button`}
                    onClick={onTryAgainClick}
                    isDisabled={readonly}
                >
                    {t('try_again')}
                </Button>
            </div>
        );
    }

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
                disabled={readonly}
            />

            <Button
                data-testid={`${id}-upload-button`}
                onClick={onUploadClick}
                isDisabled={readonly}
            >
                {t('upload')}
            </Button>
        </label>
    );
});
