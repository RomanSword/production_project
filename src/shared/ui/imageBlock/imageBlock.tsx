import { ImgHTMLAttributes, ReactElement, memo, useCallback, useRef, useState } from 'react';

import { classNames } from 'shared/lib';
import { Modal, Portal, Spinner, SpinnerAppearance } from 'shared/ui';

import CloseIcon from 'shared/assets/icons/close.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';

import { Button } from '../button/button';

import cls from './imageBlock.module.scss';

export enum ImageBlockSize {
    SMALL = 'small', // 40px
    MEDIUM = 'medium', // 100px
    LARGE = 'large', // 150px
    XLARGE = 'xlarge', // 200px
    FULL_WIDTH = 'fullWidth' // 100%
}

interface ImageBlockProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: ImageBlockSize;
    isRound?: boolean;
    withPreview?: boolean;
    withLoadingImage?: boolean;
    withBorder?: boolean;
    readonly?: boolean;
    onDelete?: () => void;
    className?: string;
}

export const ImageBlock = memo(function ImageBlock(props: ImageBlockProps): ReactElement {
    const {
        src,
        alt = '',
        size = ImageBlockSize.MEDIUM,
        isRound = false,
        withPreview = false,
        withLoadingImage = true,
        withBorder = false,
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
            data-size={size}
            className={classNames([cls.container, className])}
        >
            {withLoadingImage &&
                isLoading &&
                (size === ImageBlockSize.SMALL ? (
                    <div
                        className={classNames([
                            cls.spinnerWrapper,
                            isRound ? cls.containerRound : ''
                        ])}
                    ></div>
                ) : (
                    <div
                        className={classNames([
                            cls.spinnerWrapper,
                            isRound ? cls.containerRound : ''
                        ])}
                    >
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
                    {withPreview && (
                        <Button
                            data-testid='view-image-button'
                            onClick={changeModalVisibility}
                            className={cls.action}
                        >
                            <EyeIcon />
                        </Button>
                    )}

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
                className={classNames([
                    cls.image,
                    isRound ? cls.containerRound : '',
                    withBorder ? cls.containerBordered : ''
                ])}
            />
        </div>
    );
});
