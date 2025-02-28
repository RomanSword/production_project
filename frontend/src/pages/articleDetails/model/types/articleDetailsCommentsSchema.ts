import { EntityState } from '@reduxjs/toolkit';

import { CommentEntity } from 'entities/comment';
import { CommentForm } from 'features/commentForm';

export interface ArticleDetailsCommentForm extends CommentForm {
    articleId: string;
}

export interface ArticleDetailsCommentsSchema extends EntityState<CommentEntity, string> {
    isLoading?: boolean;
    error?: string;
}
