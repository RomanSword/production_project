import { ImgHTMLAttributes, ReactElement, memo, useCallback, useRef, useState } from 'react';

import { classNames } from 'shared/lib';
import { Modal, Portal, Spinner, SpinnerAppearance } from 'shared/ui';

import CloseIcon from 'shared/assets/icons/close.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';

import { Button } from '../button/button';
import cls from './imageBlock.module.scss';

export enum ImageBlockSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

interface ImageBlockProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: ImageBlockSize;
    withPreview?: boolean;
    readonly?: boolean;
    onDelete?: () => void;
    className?: string;
}

export const ImageBlock = memo(function ImageBlock(props: ImageBlockProps): ReactElement {
    const {
        src,
        alt = '',
        size = ImageBlockSize.MEDIUM,
        withPreview = false,
        readonly = false,
        onDelete,
        className
    } = props;

    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalVisible, setModalVisibility] = useState(false);

    const changeModalVisibility = useCallback((): void => {
        setModalVisibility(prev => !prev);
    }, []);

    const onLoad = () => setIsLoading(false);

    const isActionsExists = withPreview || onDelete !== null;

    return (
        <div
            className={classNames([cls.container, className])}
            data-size={size}
        >
            {isLoading &&
                (size === ImageBlockSize.SMALL ? (
                    <div className={cls.spinnerWrapper}></div>
                ) : (
                    <div className={cls.spinnerWrapper}>
                        <Spinner appearance={SpinnerAppearance.ALWAYS_BLACK} />
                    </div>
                ))}

            {isModalVisible && (
                <Portal>
                    <Modal onClose={changeModalVisibility}>
                        <img
                            src={src}
                            alt={alt}
                            loading='lazy'
                            className={cls.previewImage}
                        />
                    </Modal>
                </Portal>
            )}

            {isActionsExists && (
                <div className={cls.actionsContainer}>
                    <Button
                        data-testid='view-image-button'
                        onClick={changeModalVisibility}
                        className={cls.action}
                    >
                        <EyeIcon />
                    </Button>

                    {!readonly && (
                        <Button
                            data-testid='delete-image-button'
                            onClick={onDelete}
                            className={cls.action}
                        >
                            <CloseIcon />
                        </Button>
                    )}
                </div>
            )}

            <img
                src={src}
                alt={alt}
                loading='lazy'
                ref={imageRef}
                onLoad={onLoad}
                className={cls.image}
            />
        </div>
    );
});
