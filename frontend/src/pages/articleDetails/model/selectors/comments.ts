import { StateSchema } from 'app/providers/storeProvider';

export const getArticleDetailsCommentsError = (state: StateSchema) =>
    state.articleDetailsComments?.error || '';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailsComments?.isLoading || false;
