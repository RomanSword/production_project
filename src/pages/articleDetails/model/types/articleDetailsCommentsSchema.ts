import { EntityState } from '@reduxjs/toolkit';

import { CommentEntity } from 'entities/comment';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentEntity, string> {
    isLoading?: boolean;
    error?: string;
}
