import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './notFoundPage.module.scss';

export const NotFoundPage = (): ReactElement => {
    const { t } = useTranslation('');

    return <div className={cls.notFoundPage}>{t('not_found')}</div>;
};
