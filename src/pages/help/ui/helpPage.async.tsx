import { lazy } from 'react';

export const HelpPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./helpPage')), 2000);
}));
