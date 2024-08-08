import { FC, lazy } from 'react';

export const ProfileFormAsync = lazy<FC>(async () => {
    return await import('./profileForm');
});
