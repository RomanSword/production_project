import { lazy } from 'react';

export const HelpPageAsync = lazy(() => {
    return import('./helpPage').then(module => {
        return new Promise(resolve => {
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return resolve(module as any);
            }, 1000);
        });
    });
});
// export const HelpPageAsync = lazy(async () => {
//     return await import('./helpPage');
// });
