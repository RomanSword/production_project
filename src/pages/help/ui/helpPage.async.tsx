import { lazy } from 'react';

export const HelpPageAsync = lazy(() => {
    return import('./helpPage').then(module => {
        return new Promise(resolve => {
            setTimeout(() => {
                return resolve(module as any);
            }, 1000);
        });
    });
});
// export const HelpPageAsync = lazy(async () => {
//     return await import('./helpPage');
// });
