import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

import cls from './pageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const onClick = () => {
    location.reload();
};

export const PageError = ({ className }: PageErrorProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <div className={classNames([cls.pageError, className])}>
            <h1 className={cls.title}>{t('error.title')}</h1>

            <Button onClick={onClick}>{t('error.reset')}</Button>
        </div>
    );
};
