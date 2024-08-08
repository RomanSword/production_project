import { ImgHTMLAttributes, ReactElement, memo, useRef, useState } from 'react';

import { classNames } from 'shared/lib';
import { Spinner } from 'shared/ui';

import cls from './imageBlock.module.scss';

export enum ImageBlockSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

interface ImageBlockProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: ImageBlockSize;
    className?: string;
}

export const ImageBlock = memo((props: ImageBlockProps): ReactElement => {
    const { size = ImageBlockSize.MEDIUM, className } = props;

    const [isLoading, setIsLoading] = useState(true);
    const imageRef = useRef(null);

    const onLoad = () => setIsLoading(false);

    return (
        <div
            className={classNames([cls.container, className])}
            data-size={size}
        >
            {isLoading && (
                <div className={cls.spinnerWrapper}>
                    <Spinner />
                </div>
            )}

            <img
                {...props}
                loading='lazy'
                ref={imageRef}
                onLoad={onLoad}
                className={cls.image}
            />
        </div>
    );
});
