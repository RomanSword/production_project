import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => {
    return await import('./profilePage');
});
