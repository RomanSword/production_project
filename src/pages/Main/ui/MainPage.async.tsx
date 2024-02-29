import { lazy } from 'react';

export const MainPageAsync = lazy(() => {
    return import('./mainPage').then(module => {
        return new Promise(resolve => {
            setTimeout(() => {
                return resolve(module as any);
            }, 1000);
        });
    });
});
// lazy(async () => {
//     return await import('./mainPage');
// });
