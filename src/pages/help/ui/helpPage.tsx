import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const HelpPage = (): ReactElement => {
    const { t } = useTranslation('help');

    return <div>{t('page')}</div>;
};

export default HelpPage;
