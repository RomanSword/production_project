import { lazy } from 'react';

export const LoginFormAsync = lazy(async () => {
    return await import('./loginForm');
});
