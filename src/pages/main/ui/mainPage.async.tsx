import { lazy } from 'react';

export const MainPageAsync = lazy(async () => {
    return await import('./mainPage');
});
