import { FC, lazy } from 'react';

export const LoginFormAsync = lazy<FC>(async () => {
    return await import('./loginForm');
});
