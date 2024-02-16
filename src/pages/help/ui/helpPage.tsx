import { useTranslation } from 'react-i18next';

const HelpPage = () => {
    const { t } = useTranslation('help');

    return <div>{t('page')}</div>;
};

export default HelpPage;
