import { StateSchema } from 'app/providers/storeProvider';

export const getCommentFormError = (state: StateSchema) => state.commentForm?.error || '';
export const getCommentFormId = (state: StateSchema) => state.commentForm?.id || '';
export const getCommentFormIsLoading = (state: StateSchema) =>
    state.commentForm?.isLoading || false;
export const getCommentFormText = (state: StateSchema) => state.commentForm?.text || '';
