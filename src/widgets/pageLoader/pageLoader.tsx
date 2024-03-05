import { ReactElement } from 'react';

import { classNames } from 'shared/lib';
import { Spinner } from 'shared/ui';

import cls from './pageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps): ReactElement => {
    return (
        <div className={classNames([cls.pageLoader, className])}>
            <Spinner />
        </div>
    );
};
