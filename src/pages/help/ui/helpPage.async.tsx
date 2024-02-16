import { lazy } from 'react';

export const HelpPageAsync = lazy(async () => {
    return await import('./helpPage');
});
