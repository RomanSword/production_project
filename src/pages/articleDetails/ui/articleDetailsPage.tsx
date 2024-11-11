import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/article';
import { classNames } from 'shared/lib';

import cls from './articleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames([cls.articleDetailsPage, className])}>{t('not_found')}</div>
        );
    }

    return (
        <div className={classNames([cls.articleDetailsPage, className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
