import { classNames } from 'shared/lib';

import cls from './pageLoader.module.scss';
import { Spinner } from 'shared/ui';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames([cls.pageLoader, className])}>
            <Spinner />
        </div>
    );
};
