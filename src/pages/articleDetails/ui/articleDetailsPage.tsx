import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = (): ReactElement => {
    const { t } = useTranslation('articles');

    return <div>{t('details')}</div>;
};

export default ArticleDetailsPage;
