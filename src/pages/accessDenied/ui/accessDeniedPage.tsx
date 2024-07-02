import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './accessDeniedPage.module.scss';

export const AccessDeniedPage = (): ReactElement => {
    const { t } = useTranslation();

    return <div className={cls.accessDenied}>{t('error.access_denied')}</div>;
};
