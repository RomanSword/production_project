import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = (): ReactElement => {
    const { t } = useTranslation('main');

    return <div>{t('page')}</div>;
};

export default MainPage;
