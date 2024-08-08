import { ReactElement } from 'react';

import { FCCP } from 'app/types/declarations';
import { classNames } from 'shared/lib';
import { Spinner } from 'shared/ui';

import cls from './loadingWrapper.module.scss';

interface LoadingWrapperProps {
    isLoading: boolean;
    className?: string;
}

export const LoadingWrapper: FCCP<LoadingWrapperProps> = (props): ReactElement => {
    const { isLoading, className, children } = props;

    return (
        <div className={classNames([cls.container, className])}>
            {isLoading && (
                <div className={cls.spinnerWrapper}>
                    <Spinner />
                </div>
            )}

            {children}
        </div>
    );
};
