import { lazy } from 'react';

export const ArticleListPageAsync = lazy(async () => {
    return await import('./articleListPage');
});
