import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(async () => {
    return await import('./articleDetailsPage');
});
