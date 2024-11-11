import { ReactElement } from 'react';

import { classNames } from 'shared/lib';

import cls from './skeleton.module.scss';

interface SkeletonProps {
    height?: string;
    width?: string;
    borderRadius?: string;
    className?: string;
}

export const Skeleton = (props: SkeletonProps): ReactElement => {
    const { height, width, borderRadius, className = '' } = props;

    return (
        <div
            className={classNames([cls.container, className])}
            style={{
                height,
                width,
                borderRadius
            }}
        ></div>
    );
};
