import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleListPage = (): ReactElement => {
    const { t } = useTranslation('articles');

    return <div>{t('list')}</div>;
};

export default ArticleListPage;
