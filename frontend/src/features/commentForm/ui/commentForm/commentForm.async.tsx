import { lazy } from 'react';

export const CommentFormAsync = lazy(async () => {
    return await import('./commentForm');
});
